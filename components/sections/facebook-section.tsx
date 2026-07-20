"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, ExternalLink, ThumbsUp, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const fakePosts = [
  {
    id: 1,
    date: "2 zile în urmă",
    content: "Tablou electric nou instalat azi! Siguranțe automate Schneider, diferențial ABB. Totul organizat și etichetat corect.",
    likes: 47,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    date: "5 zile în urmă",
    content: "Iluminat LED montat în bucătărie - bandă LED sub mobilier și spoturi. Transformare totală!",
    likes: 83,
    comments: 23,
    shares: 8,
  },
  {
    id: 3,
    date: "1 săptămână în urmă",
    content: "Instalație electrică completă pentru casă nouă. 15 circuite, totul conform normativelor. Mulțumim pentru încredere!",
    likes: 126,
    comments: 31,
    shares: 15,
  },
]

export function FacebookSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4">
            Social Media
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Urmărește-ne pe Facebook
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vezi ultimele lucrări și noutăți direct de pe pagina noastră
          </p>
        </motion.div>

        

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8"
          >
            <a
              href="https://www.facebook.com/profile.php?id=61591647570181"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Vezi toate lucrările pe Facebook
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
