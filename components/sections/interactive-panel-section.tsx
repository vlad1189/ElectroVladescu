"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { Info, X, Zap, Shield, AlertTriangle, PlugZap, GripVertical } from "lucide-react"
import Image from "next/image"

interface HotspotData {
  id: string
  title: string
  description: string
  icon: React.ElementType
  position: { x: number; y: number }
}

const hotspots: HotspotData[] = [
  {
    id: "breaker",
    title: "Întrerupător General",
    description: "Întrerupătorul principal care controlează toată alimentarea electrică a locuinței. În caz de urgență, acesta oprește curentul pentru întreaga casă.",
    icon: Zap,
    position: { x: 20, y: 25 }
  },
  {
    id: "rcd",
    title: "Diferențial (RCD)",
    description: "Dispozitiv de protecție împotriva electrocutării. Detectează scurgerile de curent și întrerupe alimentarea în milisecunde pentru siguranța ta.",
    icon: Shield,
    position: { x: 35, y: 25 }
  },
  {
    id: "mcb",
    title: "Siguranțe Automate (MCB)",
    description: "Protejează circuitele individuale împotriva suprasarcinilor. Fiecare siguranță deservește un circuit specific: lumini, prize, electrocasnice.",
    icon: AlertTriangle,
    position: { x: 65, y: 45 }
  },
  {
    id: "ground",
    title: "Bară de Nul și Împământare",
    description: "Conexiunea la pământ asigură protecția împotriva defectelor de izolație și descărcărilor electrostatice. Esențială pentru siguranță.",
    icon: PlugZap,
    position: { x: 50, y: 80 }
  },
]

export function InteractivePanelSection() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  const activeHotspotData = hotspots.find(h => h.id === activeHotspot)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <section id="panou" className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experiență interactivă
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            De la schemă la realitate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Glisează pentru a vedea transformarea unui tablou electric profesional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Before/After Comparison Slider */}
          <div 
            ref={containerRef}
            className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-primary/10 border border-border"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* After Image (Real Panel) - Background layer */}
            <div className="absolute inset-0">
              <Image
                src="/images/panel-real.jpg"
                alt="Tablou electric finalizat profesional"
                fill
                className="object-cover"
                priority
              />
              {/* Hotspots on real image */}
              {sliderPosition < 80 && hotspots.map((hotspot) => (
                <motion.button
                  key={hotspot.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: hotspot.position.x > sliderPosition ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute w-10 h-10 -ml-5 -mt-5 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-primary transition-all shadow-lg shadow-primary/40 z-20"
                  style={{ 
                    left: `${hotspot.position.x}%`, 
                    top: `${hotspot.position.y}%`,
                    pointerEvents: hotspot.position.x > sliderPosition ? 'auto' : 'none'
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveHotspot(hotspot.id)
                  }}
                >
                  <Info className="w-5 h-5" />
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </motion.button>
              ))}
            </div>

            {/* Before Image (Schematic) - Overlay with clip */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/panel-schematic.jpg"
                alt="Schema tehnică tablou electric"
                fill
                className="object-cover"
                priority
              />
              {/* Schematic label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium text-foreground border border-border">
                Schemă tehnică
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Vertical line */}
              <div className="absolute h-full w-1 bg-white shadow-lg shadow-black/30" />
              
              {/* Handle button */}
              <div className="relative w-12 h-12 rounded-full bg-white shadow-xl shadow-black/30 flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-primary">
                <GripVertical className="w-5 h-5 text-primary" />
              </div>
              
              {/* Labels */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full flex gap-8 text-xs font-medium whitespace-nowrap">
                <span className="px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-foreground border border-border">
                  Schemă
                </span>
                <span className="px-2 py-1 bg-primary text-primary-foreground rounded">
                  Rezultat
                </span>
              </div>
            </div>

            {/* Real panel label */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium z-10">
              Lucrare finalizată
            </div>

            {/* Instruction overlay */}
            {sliderPosition === 50 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-background/95 backdrop-blur-md rounded-full shadow-xl border border-border">
                  <motion.div 
                    animate={{ x: [-10, 10, -10] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-primary"
                  >
                    <GripVertical className="w-5 h-5" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">Glisează pentru a compara</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Info text below */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
              {sliderPosition < 30 
                ? "Schema tehnică detaliată - baza oricărei instalații electrice profesionale" 
                : sliderPosition > 70 
                ? "Rezultatul final - click pe punctele interactive pentru a afla detalii despre componente"
                : "Fiecare proiect începe cu o schemă detaliată și se finalizează cu o execuție impecabilă"}
            </p>
          </div>

          {/* Features below slider */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "Proiectare", value: "Profesională", icon: "📐" },
              { label: "Componente", value: "Certificate", icon: "✓" },
              { label: "Garanție", value: "5 ani", icon: "🛡️" },
              { label: "Standard", value: "European", icon: "🇪🇺" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center p-4 rounded-xl bg-card border border-border"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <div className="text-sm text-muted-foreground">{item.label}</div>
                <div className="font-semibold text-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hotspot Modal */}
      {activeHotspotData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveHotspot(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-card rounded-2xl border border-border p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeHotspotData.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{activeHotspotData.title}</h3>
              </div>
              <button 
                onClick={() => setActiveHotspot(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {activeHotspotData.description}
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Toate componentele folosite sunt de la producători de top și vin cu garanție extinsă.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
