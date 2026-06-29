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
  {
    icon: Clock,
    title: "Intervenții Rapide",
    description: "Răspuns prompt și programări în cel mai scurt timp posibil."
  },
  {
    icon: Shield,
    title: "Lucrări de Calitate",
    description: "Atenție la detalii și soluții durabile pentru fiecare proiect."
  },
  {
    icon: Wrench,
    title: "Soluții Personalizate",
    description: "Fiecare lucrare este adaptată nevoilor și bugetului tău."
  },
  {
    icon: Award,
    title: "Seriozitate și Profesionalism",
    description: "Respectăm programările și livrăm lucrări executate cu grijă."
  },
];
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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
      </div>
    </section>
  )
}
