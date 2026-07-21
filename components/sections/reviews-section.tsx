"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Cristian Preda",
    avatar: "CP",
    rating: 5,
    text: "Servicii excelente.Electrician foarte serios,punctual si profesionist. A identificat rapid problema si a rezolvat-o eficient, explicând clar fiecare pas. Lucrarea a fost executata cu atenție la detalii, iar prețul a fost corect.Cu siguranta voi apela din nou la serviciile sale si il recomand oricui are nevoie de un electrician de încredere.",
    location: "Tulcea",
  },
  {
    id: 2,
    name: "Alexandra rupa",
    avatar: "AR",
    rating: 5,
    text: "Instalația electrică refăcută complet și foarte profesionist. Totul organizat și curat, cu explicații pe parcurs.",
    location: "",
  },
  {
    id: 3,
    name: "Andreea Pascas",
    avatar: "AP",
    rating: 5,
    text: "De cauti in Tulcea un electrician corect si meserias poti apela cu incredere la Cristi! Electrovladescu este cea mai buna alegere",
    location: "",
  },
  {
    id: 4,
    name: "Cristi Beringhean",
    avatar: "CB",
    rating: 5,
    text: "Recomand. ✅ Eficiență, curățenie, amabilitate și echipa de încredere. M-a ajutat la ceva lucrări, dar după ce s-a mutat la Tulcea, mi-a oferit consultanță prin telefon și am rezolvat problema. Este echipa pe care o cauți, o vrei!",
    location: "",
  },
  {
    id: 5,
    name: "Hadasa Ciangau",
    avatar: "HC",
    rating: 5,
    text: "Seriozitate, conștiinciozitate, sinceritate, curățenie-sunt doar câteva cuvinte care definesc profesionalismul.Un mare câștig pentru zona Tulcea!!!!",
    location: "",
  },
  {
    id: 6,
    name: "Marius Trofin",
    avatar: "MT",
    rating: 5,
    text: "Lucrări de calitate ! Disponibilitate și flexibilitate la Tulcea. Echipă profesionistă! Recomand cu încredere!",
    location: "Tulcea",
  },
]

export function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="recenzii" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimoniale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback-ul clienților ne motivează să oferim servicii de cea mai înaltă calitate
          </p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-card rounded-3xl border border-border">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">5.0</div>
            <p className="text-muted-foreground">Rating mediu din {reviews.length}+ recenzii</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
