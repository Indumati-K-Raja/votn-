"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import React from "react"

export default function Activities() {
  const activities = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Women Empowerment Through Education",
      description:
        "Providing scholarships, skill development programs, and entrepreneurship training to empower women across Tamil Nadu.",
      image: "/wom-emp.jpg?height=300&width=400",
      link: "/blog/women-empowerment",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Inclusion Initiative",
      description:
        "Setting up Digital Resource Centers and conducting workshops to bridge the digital divide in rural communities.",
      image: "/dig-inc.jpg?height=300&width=400",
      link: "/blog/digital-inclusion",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Sustainable Development Programs",
      description:
        "Tree plantation drives, water conservation projects, and eco-friendly initiatives for environmental protection.",
      image: "/sust-dev.jpg?height=300&width=400",
      link: "/blog/sustainable-development",
    },
  ]

  const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        whileHover={{ y: -8 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Major Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our key initiatives that are making a real difference in communities across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <AnimatedCard key={index} index={index}>
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover group h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
                  <motion.img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className="bg-white/90 p-2 rounded-full text-orange-600"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activity.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activity.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                    <Link
                      href={activity.link}
                      className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors duration-300"
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Link
              href="/blog"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              View All Activities
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
