"use client"

import { Users, Megaphone, Heart, Handshake } from "lucide-react"
import { motion, useInView } from "framer-motion"
import React from "react"

export default function Objectives() {
  const objectives = [
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Amplifying Voices",
      description:
        "Giving a platform to marginalized communities and ensuring their stories reach policymakers and society.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Empowering Communities",
      description: "Building local leadership and providing tools for communities to take charge of their own futures.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Advocating Change",
      description: "Working towards policy reforms and systemic changes that benefit entire communities and regions.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Collaborating for Impact",
      description: "Partnering with organizations, government bodies, and stakeholders to maximize social impact.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
    },
  ]

  const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <section
      id="objectives"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Our Objectives</h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            We work at the intersection of community-driven initiatives and systemic change, ensuring every individual
            has the opportunity to thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <AnimatedCard key={index} index={index}>
              <div
                className={`bg-gradient-to-br ${objective.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 group relative overflow-hidden h-full`}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${objective.color.split(" ")[1]}, ${objective.color.split(" ")[3]})`,
                  }}
                />

                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${objective.color} flex items-center justify-center text-white mb-6 shadow-lg relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {objective.icon}
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 relative z-10">{objective.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light relative z-10">{objective.description}</p>

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${objective.color.split(" ")[1]}, ${objective.color.split(" ")[3]}, ${objective.color.split(" ")[1]})`,
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-[2px] bg-gradient-to-br from-white/90 to-white/80 rounded-3xl" />
              </div>
            </AnimatedCard>
          ))}
        </div>

              </div>
    </section>
  )
}
