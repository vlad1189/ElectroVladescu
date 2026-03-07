"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useMemo } from "react"
import { Calculator, Home, Building2, Wrench, ArrowRight } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const propertyTypes = [
  { id: "apartment", label: "Apartament", icon: Building2, multiplier: 1 },
  { id: "house", label: "Casă", icon: Home, multiplier: 1.3 },
  { id: "commercial", label: "Spațiu comercial", icon: Building2, multiplier: 1.5 },
]

const workTypes = [
  { id: "new", label: "Instalație nouă completă", multiplier: 1 },
  { id: "partial", label: "Refacere parțială", multiplier: 0.6 },
  { id: "panel", label: "Doar tablou electric", multiplier: 0.3 },
  { id: "lighting", label: "Iluminat LED", multiplier: 0.4 },
  { id: "diagnostic", label: "Diagnostic și reparații", multiplier: 0.15 },
]

const basePricePerRoom = 800 // RON base price per room

export function CalculatorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [propertyType, setPropertyType] = useState("apartment")
  const [rooms, setRooms] = useState([3])
  const [workType, setWorkType] = useState("new")
  const [showResult, setShowResult] = useState(false)

  const estimate = useMemo(() => {
    const property = propertyTypes.find(p => p.id === propertyType)
    const work = workTypes.find(w => w.id === workType)
    if (!property || !work) return { min: 0, max: 0 }
    
    const basePrice = rooms[0] * basePricePerRoom * property.multiplier * work.multiplier
    return {
      min: Math.round(basePrice * 0.8),
      max: Math.round(basePrice * 1.2),
    }
  }, [propertyType, rooms, workType])

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Estimare rapidă
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Calculator Estimare Lucrare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obține o estimare orientativă pentru proiectul tău electric în câteva secunde
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Estimare Rapidă</h3>
                <p className="text-sm text-muted-foreground">Completează pentru o estimare orientativă</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Property Type */}
              <div>
                <Label className="text-base font-medium mb-4 block">1. Tip proprietate</Label>
                <div className="grid grid-cols-3 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPropertyType(type.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        propertyType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <type.icon className={`w-8 h-8 mx-auto mb-2 ${
                        propertyType === type.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className={`text-sm font-medium ${
                        propertyType === type.id ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Rooms */}
              <div>
                <Label className="text-base font-medium mb-4 block">
                  2. Număr camere: <span className="text-primary">{rooms[0]}</span>
                </Label>
                <Slider
                  value={rooms}
                  onValueChange={setRooms}
                  min={1}
                  max={10}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 cameră</span>
                  <span>10 camere</span>
                </div>
              </div>

              {/* Work Type */}
              <div>
                <Label className="text-base font-medium mb-4 block">3. Tip lucrare</Label>
                <RadioGroup value={workType} onValueChange={setWorkType} className="space-y-3">
                  {workTypes.map((type) => (
                    <div key={type.id} className="flex items-center">
                      <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                      <Label
                        htmlFor={type.id}
                        className="flex items-center gap-3 w-full p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 border-border hover:border-primary/30"
                      >
                        <Wrench className={`w-5 h-5 ${workType === type.id ? "text-primary" : "text-muted-foreground"}`} />
                        <span className={workType === type.id ? "text-foreground font-medium" : "text-muted-foreground"}>
                          {type.label}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Calculate Button */}
              <Button
                size="lg"
                className="w-full py-6 text-lg font-semibold"
                onClick={() => setShowResult(true)}
              >
                Calculează estimarea
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Result */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">Estimare orientativă:</h4>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {estimate.min.toLocaleString()} - {estimate.max.toLocaleString()} RON
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    * Aceasta este o estimare orientativă. Prețul final poate varia în funcție de condițiile reale ale lucrării.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Solicită o ofertă personalizată
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
