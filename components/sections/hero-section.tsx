"use client"

import { motion } from "framer-motion"
import { Phone, FileText, Zap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Electric circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50h30l10-10h20l10 10h30" stroke="currentColor" strokeWidth="1" fill="none" className="text-electric-blue" />
              <path d="M50 0v30l10 10v20l-10 10v30" stroke="currentColor" strokeWidth="1" fill="none" className="text-electric-yellow" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-electric-yellow" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Electrician Autorizat</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              <span className="text-foreground">ElectroVlădescu</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Instalații Electrice Profesionale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg text-pretty"
            >
              Instalații electrice sigure, moderne și realizate ca la carte. Cu noi aduci casa la lumină!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FileText className="w-5 h-5 mr-2" />
                Solicită ofertă
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
                asChild
              >
                <a href="tel:+40700000000">
                  <Phone className="w-5 h-5 mr-2" />
                  Sună acum
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-8 pt-8 border-t border-border/50"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Ani Experiență</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Lucrări Finalizate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Clienți Mulțumiți</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Cristi Portrait section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect behind portrait */}
              <motion.div
                className="absolute inset-0 bg-primary/30 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Portrait with decorative frame */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 blur-sm" />
                  <div className="absolute -inset-2 border-4 border-primary/30 rounded-full" />
                  
                  <Image
                    src="/images/cristi-portrait.jpg"
                    alt="Cristi - Electrician Autorizat ElectroVlădescu"
                    width={400}
                    height={400}
                    className="rounded-full shadow-2xl object-cover aspect-square border-4 border-card"
                    priority
                  />
                  
                  {/* Name badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-2 rounded-full shadow-lg border border-border"
                  >
                    <span className="font-semibold text-foreground">Cristi Vlădescu</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating electric icons */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 bg-card rounded-2xl shadow-xl border border-border"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lightbulb className="w-8 h-8 text-primary animate-glow-pulse" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-4 p-4 bg-card rounded-2xl shadow-xl border border-border"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Zap className="w-8 h-8 text-secondary" />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute top-4 -left-8 p-3 bg-primary text-primary-foreground rounded-2xl shadow-xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">10+</div>
                  <div className="text-xs opacity-90">ani</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
