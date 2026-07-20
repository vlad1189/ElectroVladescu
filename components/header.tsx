"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Menu, X, Sun, Moon, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Acasă", href: "#" },
  { label: "Despre", href: "#despre" },
  { label: "Servicii", href: "#servicii" },
  { label: "Galerie", href: "#galerie" },
  { label: "Recenzii", href: "#recenzii" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="ElectroVlădescu Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-foreground">ELECTROVLADESCU</span>
                <p className="text-xs text-muted-foreground">Electrician Profesionist</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </Button>
              )}

              {/* CTA Button */}
              <Button
                asChild
                className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="tel:+40755295009">
                  <Phone className="w-4 h-4 mr-2" />
                  Sună acum
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-border lg:hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+40755295009"
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Sună acum
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

