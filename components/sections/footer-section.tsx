"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Phone, Mail, MapPin, Zap } from "lucide-react"

const quickLinks = [
  { label: "Acasă", href: "#" },
  { label: "Despre noi", href: "#despre" },
  { label: "Servicii", href: "#servicii" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Instalații electrice complete",
  "Panouri electrice",
  "Iluminat LED",
  "Automatizări",
  "Reparații electrice",
]

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="ElectroVlădescu Logo"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <div>
                <h3 className="font-bold text-lg">ElectroVlădescu</h3>
                <p className="text-sm text-background/60">S.R.L.</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Cu noi aduci casa la lumină! Electrician profesionist pentru instalații electrice sigure și moderne.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/Electrovladescu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Linkuri rapide
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Servicii
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+40755295009" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +40 755 295 009
                </a>
              </li>
              <li>
                <a href="mailto:contact@electrovladescu.ro" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  electrovladescusrl@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Tulcea și împrejurimi</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {currentYear} ELECTROVLADESCU S.R.L. Toate drepturile rezervate.
            </p>
            <p className="text-sm text-background/60">
              Electrician autorizat ANRE
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


