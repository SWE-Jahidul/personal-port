"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Jahidul I. Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>and lots of coffee</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <motion.a href="#" className="hover:text-foreground transition-colors duration-200" whileHover={{ y: -2 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" className="hover:text-foreground transition-colors duration-200" whileHover={{ y: -2 }}>
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
