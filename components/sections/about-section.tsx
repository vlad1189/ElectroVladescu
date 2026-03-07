"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Shield, Clock, Wrench } from "lucide-react"

const timeline = [
  { year: "2014", title: "Începutul călătoriei", description: "Prima lucrare electrică profesională" },
  { year: "2017", title: "Autorizare ANRE", description: "Obținerea autorizației de electrician" },
  { year: "2020", title: "500+ Proiecte", description: "Milestone important în carieră" },
  { year: "2024", title: "ElectroVlădescu S.R.L.", description: "Înființarea companiei" },
]

const features = [
  { icon: Award, title: "Electrician Autorizat", description: "Certificări și autorizații la zi" },
  { icon: Shield, title: "Garanție Lucrări", description: "Siguranță și calitate garantată" },
  { icon: Clock, title: "Disponibilitate", description: "Program flexibil pentru tine" },
  { icon: Wrench, title: "Echipamente Moderne", description: "Tehnologie de ultimă generație" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="despre" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Cine suntem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Despre ElectroVlădescu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cristi Vlădescu este electrician profesionist specializat în instalații electrice pentru locuințe și spații comerciale. Cu atenție la detalii și respectarea standardelor de siguranță, ElectroVlădescu oferă soluții moderne și eficiente pentru orice proiect electric.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Experiența noastră</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block" />
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full md:hidden" />
            
            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="relative"
                >
                  <div
                    className={`relative md:hidden flex items-center justify-between min-h-[140px] ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`w-[calc(50%-1rem)] ${index % 2 === 0 ? "text-right pr-3" : "text-left pl-3"}`}>
                      <div className="p-3 sm:p-4 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                    <div className="w-[calc(50%-1rem)]" />
                  </div>

                  <div
                    className={`hidden md:flex md:items-center md:justify-between ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                    <div className="md:w-5/12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
