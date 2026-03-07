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

        {/* Facebook posts preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {fakePosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Post header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">ElectroVlădescu</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </div>

              {/* Post content */}
              <div className="p-4">
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {post.content}
                </p>
                
                {/* Placeholder image */}
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <Facebook className="w-12 h-12 text-muted-foreground/30" />
                </div>
              </div>

              {/* Post stats */}
              <div className="px-4 py-3 border-t border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      {post.shares}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
              href="https://www.facebook.com/Electrovladescu"
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
