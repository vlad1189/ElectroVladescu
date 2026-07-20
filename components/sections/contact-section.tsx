"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      // Submit to Formsubmit.co (free email service)
      const response = await fetch('https://formsubmit.co/ajax/leontevlad2175@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: 'Nouă cerere de ofertă - ElectroVlădescu',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('A apărut o eroare la trimitere')
      }

      setIsSubmitted(true)
      form.reset()
    } catch (err) {
      setError('A apărut o eroare. Te rugăm să încerci din nou sau sună-ne direct.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hai să vorbim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactează-ne pentru o consultanță gratuită și o ofertă personalizată
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Phone - Prominent */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Sună-ne direct</p>
                  <a href="tel:+40755295009" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                    +40 755 295 009
                  </a>
                </div>
              </div>
            </div>

            {/* Other contact methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/40755295009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Scrie-ne</p>
                </div>
              </a>

              <a
                href="mailto:contact@electrovladescu.ro"
                className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">Trimite email</p>
                </div>
              </a>
            </div>

            {/* Location & Hours */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Zonă de activitate</p>
                  <p className="font-semibold text-foreground">Tulcea și împrejurimi</p>
                  <p className="text-sm text-muted-foreground">Județul Tulcea, Delta Dunării</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Program</p>
                  <p className="font-semibold text-foreground">Luni - Vineri: 08:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">Sâmbătă: 09:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl bg-muted border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89088.33898722437!2d28.746095934570308!3d45.17856870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b735b89f8e5c47%3A0xcfa7e7c95c6a8e6f!2sTulcea!5e0!3m2!1sen!2sro!4v1699999999999!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație ElectroVlădescu Tulcea"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div id="contact-form" className="scroll-mt-28 bg-card rounded-3xl border border-border p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Solicită ofertă gratuită</h3>
              <p className="text-muted-foreground mb-8">Completează formularul și te contactăm în cel mai scurt timp</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Send className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Mesaj trimis cu succes!</h4>
                  <p className="text-muted-foreground">Te vom contacta în curând.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  {/* Hidden inputs for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />

                  {error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nume complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ion Popescu"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+40 755 295 009"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@exemplu.ro"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descrie pe scurt ce lucrări ai nevoie..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Trimite cerere ofertă
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

