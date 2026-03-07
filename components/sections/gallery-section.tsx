"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  {
    id: 1,
    title: "Tablou Electric Modern",
    category: "Panouri",
    before: "Tablou vechi dezorganizat",
    after: "Panou profesional cu siguranțe automate",
  },
  {
    id: 2,
    title: "Instalație Apartament",
    category: "Instalații",
    before: "Cabluri vechi deteriorate",
    after: "Instalație nouă cu cabluri cupru",
  },
  {
    id: 3,
    title: "Iluminat LED Bucătărie",
    category: "Iluminat",
    before: "Iluminat clasic slab",
    after: "Bandă LED sub mobilier",
  },
  {
    id: 4,
    title: "Panou Industrial",
    category: "Panouri",
    before: "Tablou subdimensionat",
    after: "Panou industrial complet",
  },
  {
    id: 5,
    title: "Prize și Întrerupătoare",
    category: "Accesorii",
    before: "Prize vechi îngălbenite",
    after: "Prize și întrerupătoare premium",
  },
  {
    id: 6,
    title: "Iluminat Exterior",
    category: "Iluminat",
    before: "Fără iluminat exterior",
    after: "Spoturi LED perimetrale",
  },
]

const categories = ["Toate", "Panouri", "Instalații", "Iluminat", "Accesorii"]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [lightboxItem, setLightboxItem] = useState<number | null>(null)
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({})

  const filteredItems = selectedCategory === "Toate" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const currentLightboxItem = lightboxItem !== null ? galleryItems.find(item => item.id === lightboxItem) : null

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxItem === null) return
    const currentIndex = filteredItems.findIndex(item => item.id === lightboxItem)
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0) newIndex = filteredItems.length - 1
    if (newIndex >= filteredItems.length) newIndex = 0
    setLightboxItem(filteredItems[newIndex].id)
  }

  return (
    <section id="galerie" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Portofoliu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Galerie Lucrări
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Vezi transformările realizate de echipa noastră - înainte și după
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:bg-muted border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
                onClick={() => setLightboxItem(item.id)}
              >
                {/* Placeholder for before/after images */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-card flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {showAfter[item.id] ? item.after : item.before}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs text-primary font-medium mb-1">{item.category}</span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowAfter(prev => ({ ...prev, [item.id]: !prev[item.id] }))
                    }}
                    className="mt-3 px-3 py-1.5 text-xs font-medium bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors w-fit"
                  >
                    {showAfter[item.id] ? "Vezi înainte" : "Vezi după"}
                  </button>
                </div>

                {/* Before/After badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                  {showAfter[item.id] ? "După" : "Înainte"}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem !== null && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setLightboxItem(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              onClick={() => setLightboxItem(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button 
              className="absolute left-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute right-6 p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full mx-8 p-8 bg-card rounded-3xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center mb-6">
                <div className="text-center">
                  <ZoomIn className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    {showAfter[currentLightboxItem.id] ? currentLightboxItem.after : currentLightboxItem.before}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-primary font-medium">{currentLightboxItem.category}</span>
                  <h3 className="text-2xl font-bold text-foreground">{currentLightboxItem.title}</h3>
                </div>
                <button
                  onClick={() => setShowAfter(prev => ({ ...prev, [currentLightboxItem.id]: !prev[currentLightboxItem.id] }))}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  {showAfter[currentLightboxItem.id] ? "Vezi înainte" : "Vezi după"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
