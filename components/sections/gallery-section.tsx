"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"

const galleryItems = [
   {
    id: 1,
    title: "Iluminat Lampi exterioare",
    category: "Iluminat",
    image: "/images/iluminat-frumos.jpg",
  },

  {
    id: 2,
    title: "Instalație Casa Noua",
    category: "Instalații",
    image: "/images/in-actiune2.jpg",
  },
   {
    id: 3,
    title: "Tablou Electric Modern",
    category: "Panouri",
    image: "/images/panou-frumos.jpg",
  },
  {
    id: 4,
    title: "Panou Electric ",
    category: "Panouri",
    image: "/images/panou.jpg",
  },
  {
    id: 5,
    title: "Iluminat Lampi exterioare",
    category: "Accesorii",
    image: "/images/iluminat-4.jpg",
  },
  {
    id: 6,
    title: "Iluminat Lampi exterioare",
    category: "Iluminat",
    image: "/images/iluminat-6.jpg",
  },
  {
    id: 7,
    title: "Iluminat Interior",
    category: "Iluminat",
    image: "/images/iluminat-2.jpg",
  },
  {
    id: 8,
    title: "Iluminat Parcare Subterana",
    category: "Iluminat",
    image: "/images/iluminat-3.jpg",
  },
  {
    id: 9,
    title: "Iluminat Interior",
    category: "Iluminat",
    image: "/images/iluminat.jpg",
  },
  {
    id: 10,
    title: "Iluminat Interior",
    category: "Iluminat",
    image: "/images/iluminat-hala.jpg",
  },
    {
    id: 11,
    title: "Instalație Casa",
    category: "Instalații",
    image: "/images/in-actiune.jpg",
  },
    {
    id: 1,
    title: "Tablou Electric Modern",
    category: "Panouri",
    image: "/images/tablou.jpg",
  },
   {
    id: 8,
    title: "Iluminat Parcare Subterana",
    category: "Iluminat",
    image: "/images/parcare.jpg",
  },
]

const categories = ["Toate", "Panouri", "Instalații", "Iluminat", "Accesorii"]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = selectedCategory === "Toate" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return
    let newIndex = direction === 'prev' ? lightboxIndex - 1 : lightboxIndex + 1
    if (newIndex < 0) newIndex = filteredItems.length - 1
    if (newIndex >= filteredItems.length) newIndex = 0
    setLightboxIndex(newIndex)
  }, [lightboxIndex, filteredItems.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null)
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev')
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, navigateLightbox])

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
            Descoperă proiectele noastre și calitatea lucrărilor executate
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
                onClick={() => setLightboxIndex(index)}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs text-primary font-medium mb-1">{item.category}</span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click pentru a mări</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox - Fullscreen */}
      <AnimatePresence>
        {lightboxIndex !== null && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-background/80 hover:bg-background transition-colors z-10 border border-border"
              onClick={() => setLightboxIndex(null)}
              aria-label="Închide"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {filteredItems.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-6 p-3 rounded-full bg-background/80 hover:bg-background transition-colors z-10 border border-border"
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
                  aria-label="Imaginea anterioară"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                  className="absolute right-4 md:right-6 p-3 rounded-full bg-background/80 hover:bg-background transition-colors z-10 border border-border"
                  onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
                  aria-label="Imaginea următoare"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </>
            )}

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-6xl w-full max-h-[85vh] flex items-center justify-center">
                <Image
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  width={1200}
                  height={900}
                  className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>

              {/* Info bar at bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-background/90 backdrop-blur-md rounded-full border border-border flex items-center gap-4">
                <span className="text-sm text-primary font-medium">{currentLightboxItem.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-foreground font-medium">{currentLightboxItem.title}</span>
                {filteredItems.length > 1 && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {lightboxIndex + 1} / {filteredItems.length}
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}