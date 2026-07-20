"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Shield, Clock, Wrench, Users, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

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
    description: "Răspuns prompt și programări în cel mai scurt time posibil.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Shield,
    title: "Lucrări de Calitate",
    description: "Atenție la detalii și soluții durabile pentru fiecare proiect.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: Wrench,
    title: "Soluții Personalizate",
    description: "Fiecare lucrare este adaptată nevoilor și bugetului tău.",
    color: "from-amber-500 to-orange-400"
  },
  {
    icon: Award,
    title: "Seriozitate și Profesionalism",
    description: "Respectăm programările și livrăm lucrări executate cu grijă.",
    color: "from-emerald-500 to-teal-400"
  },
]

const stats = [
  { value: "10+", label: "Ani Experiență", icon: Clock },
  { value: "500+", label: "Lucrări Finalizate", icon: CheckCircle },
  { value: "100%", label: "Clienți Mulțumiți", icon: Users },
  { value: "24/7", label: "Disponibilitate", icon: Zap },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="despre" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Cine suntem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Despre{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ElectroVlădescu
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Cristi Vlădescu este electrician profesionist specializat în instalații electrice pentru locuințe și spații comerciale. Cu atenție la detalii și respectarea standardelor de siguranță, oferim soluții moderne și eficiente pentru orice proiect electric.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features grid with photo cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative h-full bg-card rounded-3xl p-8 flex flex-col">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowRight className="w-6 h-6 text-primary transform -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Călătoria Noastră
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary transform -translate-x-1/2 shadow-lg shadow-primary/30" />
                  
                  <div className={`ml-12 md:ml-0 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                    index % 2 === 0 ? '' : 'md:ml-auto'
                  } max-w-md`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Photo card section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-[3px]" />
          
          <div className="relative bg-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  De ce să alegi{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ElectroVlădescu
                  </span>
                  ?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Fiecare proiect este tratat cu aceeași atenție și dedicare, indiferent de dimensiune. Ne mândrim cu calitatea lucrărilor și cu relațiile pe termen lung construite cu clienții noștri.
                </p>
                <ul className="space-y-3">
                  {[
                    "Electrician autorizat ANRE",
                    "Respectăm toate normativele de siguranță",
                    "Folosim doar materiale premium",
                    "Garanție pentru toate lucrările",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Photo */}
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30" />
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/cristi-portrait.jpg"
                    alt="Cristi Vlădescu - Electrician Profesionist"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}