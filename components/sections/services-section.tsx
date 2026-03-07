"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Zap, 
  RefreshCcw, 
  LayoutGrid, 
  PlugZap, 
  Lightbulb, 
  Settings2, 
  Search, 
  Home, 
  Building2, 
  Sparkles 
} from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Instalații electrice complete",
    description: "Proiectare și execuție instalații electrice de la zero pentru construcții noi.",
    color: "from-primary to-primary/70"
  },
  {
    icon: RefreshCcw,
    title: "Refacere instalații vechi",
    description: "Modernizarea și înlocuirea instalațiilor electrice deteriorate sau învechite.",
    color: "from-secondary to-secondary/70"
  },
  {
    icon: LayoutGrid,
    title: "Panouri electrice profesionale",
    description: "Montaj și configurare tablouri electrice conform normativelor în vigoare.",
    color: "from-accent to-accent/70"
  },
  {
    icon: PlugZap,
    title: "Prize și întrerupătoare",
    description: "Instalare, înlocuire și reparații prize, întrerupătoare și comutatoare.",
    color: "from-primary to-secondary"
  },
  {
    icon: Lightbulb,
    title: "Iluminat interior și exterior",
    description: "Soluții complete de iluminat pentru case, grădini și spații comerciale.",
    color: "from-secondary to-accent"
  },
  {
    icon: Settings2,
    title: "Automatizări electrice",
    description: "Sisteme de automatizare pentru confort și eficiență energetică.",
    color: "from-accent to-primary"
  },
  {
    icon: Search,
    title: "Diagnostic și reparații",
    description: "Identificarea și remedierea rapidă a problemelor electrice.",
    color: "from-primary/80 to-secondary/80"
  },
  {
    icon: Home,
    title: "Instalații pentru case noi",
    description: "Soluții complete pentru construcții rezidențiale noi.",
    color: "from-secondary/80 to-accent/80"
  },
  {
    icon: Building2,
    title: "Instalații pentru apartamente",
    description: "Servicii electrice specializate pentru apartamente și blocuri.",
    color: "from-accent/80 to-primary/80"
  },
  {
    icon: Sparkles,
    title: "Iluminat LED modern",
    description: "Instalare corpuri de iluminat LED cu design contemporan.",
    color: "from-primary to-accent"
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicii" className="py-24 bg-background relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Ce oferim
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferim o gamă completă de servicii electrice pentru toate nevoile tale
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-6 bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
