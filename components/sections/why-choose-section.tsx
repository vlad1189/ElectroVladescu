"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  UserCheck, 
  CheckCircle2, 
  Package, 
  Briefcase, 
  Banknote, 
  MessageCircle 
} from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "Electrician profesionist",
    description: "Autorizat și cu experiență dovedită în domeniu",
  },
  {
    icon: CheckCircle2,
    title: "Lucrări realizate corect și sigur",
    description: "Respectăm toate normativele de siguranță în vigoare",
  },
  {
    icon: Package,
    title: "Materiale de calitate",
    description: "Folosim doar materiale premium de la producători de încredere",
  },
  {
    icon: Briefcase,
    title: "Experiență practică",
    description: "10+ ani de experiență și sute de proiecte finalizate",
  },
  {
    icon: Banknote,
    title: "Prețuri corecte",
    description: "Raport calitate-preț excelent, fără costuri ascunse",
  },
  {
    icon: MessageCircle,
    title: "Consultanță gratuită",
    description: "Te ajutăm să înțelegi ce ai nevoie înainte de a începe",
  },
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              De ce noi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              De ce să alegi ElectroVlădescu
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Alegem să facem lucrurile corect de la început. Fiecare proiect este tratat cu aceeași atenție și dedicare, indiferent de dimensiune.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Solicită ofertă gratuită
              </a>
              <a
                href="tel:+40755295009"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-semibold hover:border-primary/50 transition-colors"
              >
                Sună acum
              </a>
            </div>
          </motion.div>

          {/* Right - Reasons grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

