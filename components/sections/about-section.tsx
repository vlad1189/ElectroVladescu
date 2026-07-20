"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Shield, Clock, Wrench, Users, Zap, CheckCircle, ArrowRight, Quote } from "lucide-react"
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
    description: "Răspuns prompt și programări în cel mai scurt timp posibil.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Lucrări de Calitate",
    description: "Atenție la detalii și soluții durabile pentru fiecare proiect.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "Soluții Personalizate",
    description: "Fiecare lucrare este adaptată nevoilor și bugetului tău.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Award,
    title: "Seriozitate și Profesionalism",
    description: "Respectăm programările și livrăm lucrări executate cu grijă.",
    color: "from-emerald-500 to-teal-500"
  },
]

const stats = [
  { value: "10+", label: "Ani Experiență", icon: Clock },
  { value: "500+", label: "Proiecte Finalizate", icon: Award },
  { value: "100%", label: "Clienți Mulțumiți", icon: Users },
  { value: "24/7", label: "Disponibilitate", icon: Zap },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="despre" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
            Despre Noi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Excelență în <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Instalații Electrice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Cristi Vlădescu este electrician profesionist specializat în instalații electrice pentru locuințe și spații comerciale. Cu atenție la detalii și respectarea standardelor de siguranță, Electrovlădescu oferă soluții moderne și eficiente pentru orice proiect electric.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - Premium Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-8 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Decorative circle */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Călătoria Noastră</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la primele lucrări la o companie de încredere în domeniul instalațiilor electrice
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

            <div className="grid md:grid-cols-2 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg md:left-auto md:right-auto" />
                  
                  <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-1"
        >
          <div className="bg-background rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Gata să începem proiectul tău?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Contactează-ne astăzi pentru o consultanță gratuită și o ofertă personalizată. Suntem aici să transformăm ideile tale în realitate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  Solicită Ofertă
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+40755295009" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300"
                >
                  Sună Acum
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}