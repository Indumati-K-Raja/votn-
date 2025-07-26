"use client"

import { Users, Handshake, Megaphone, Heart, Shield, Lightbulb, ArrowRight, Sparkles, Target } from "lucide-react"
import Stats from "../components/Stats"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import React from "react"
import Navbar from "../components/Navbar"

export default function AboutPage() {
  const searchParams = useSearchParams()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])

  useEffect(() => {
    const filter = searchParams.get("filter")
    if (filter === "role" || filter === "goals") {
      const section = document.getElementById(filter)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  const roles = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Amplifying Voices of the Underserved",
      description:
        "We give a platform to those whose voices have historically been marginalized. By sharing their stories and struggles, we raise awareness about the issues that matter most to them.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowering Communities to Lead",
      description:
        "We work alongside communities to help them identify their needs and solutions. We provide tools, training, and resources they need to take charge of their own futures.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaborating for Impact",
      description:
        "We partner with local organizations, government bodies, and corporate stakeholders to build collective impact and maximize the effectiveness of social initiatives.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advocating for Systemic Change",
      description:
        "We advocate for policy reforms and systemic change that will positively affect entire communities. Through research and public dialogues, we ensure rights are prioritized.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Raising Awareness and Educating",
      description:
        "Through campaigns and outreach, we raise awareness of critical issues and educate communities about their rights and the importance of civic engagement.",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Providing Essential Support",
      description:
        "We provide essential services and resources to communities in need, from healthcare and education to disaster relief and environmental protection.",
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
    },
  ]

  const goals = [
    {
      number: "200",
      title: "Startups to Launch",
      description:
        "By 2026, we aim to help start 200 small businesses in technology, agriculture, and handicrafts, creating jobs and improving local economies.",
      timeline: "By 2026",
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: "50,000",
      title: "Individuals to Train",
      description:
        "By 2025, we plan to train 50,000 people in in-demand skills, helping them get ready for jobs and business opportunities.",
      timeline: "By 2025",
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "100",
      title: "Community Centers",
      description:
        "By 2027, we'll open 100 community centers in rural Tamil Nadu providing education, health services, and skill training.",
      timeline: "By 2027",
      color: "from-violet-500 to-purple-500",
    },
    {
      number: "80%",
      title: "Digital Literacy Goal",
      description:
        "By 2030, we want 80% of people in Tamil Nadu to be able to use digital tools and technology effectively.",
      timeline: "By 2030",
      color: "from-rose-500 to-pink-500",
    },
    {
      number: "50",
      title: "Sustainable Enterprises",
      description:
        "By 2030, we will help start 50 eco-friendly businesses that protect the environment while providing livelihoods.",
      timeline: "By 2030",
      color: "from-amber-500 to-orange-500",
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

  const FloatingElement = ({
    children,
    delay = 0,
    duration = 3,
  }: { children: React.ReactNode; delay?: number; duration?: number }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )

  return (
    <div className="pt-16 min-h-screen bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section - Reduced padding */}
      <motion.section
        className="relative py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl"
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
            className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-xl"
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
          <motion.div
            className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <FloatingElement delay={0}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </FloatingElement>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              About Voice of
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tamilnadu
            </motion.span>
          </motion.h1>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                We see ourselves as <span className="font-semibold text-blue-600">catalysts for change</span>,{" "}
                <span className="font-semibold text-indigo-600">champions of inclusion</span>, and{" "}
                <span className="font-semibold text-purple-600">amplifiers of voices</span> that too often go unheard.
                Our role is not just about providing resources but about fostering empowerment, education, and long-term
                sustainable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Role Section - Reduced padding */}
      <section id="role" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mb-4 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Our Role</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              We work at the intersection of community-driven initiatives and systemic change, ensuring that every
              individual has the opportunity to thrive and contribute to society.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <AnimatedCard key={index} index={index}>
                <div
                  className={`bg-gradient-to-br ${role.bgColor} rounded-3xl p-6 shadow-lg border border-white/50 group relative overflow-hidden h-full`}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${role.color.split(" ")[1]}, ${role.color.split(" ")[3]})`,
                    }}
                  />

                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${role.color} flex items-center justify-center text-white mb-4 shadow-lg relative z-10`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {role.icon}
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 relative z-10">{role.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light relative z-10 text-sm md:text-base">
                    {role.description}
                  </p>

                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals Section - Reduced padding */}
      <section
        id="goals"
        className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ y: y1 }}>
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 mb-4 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Goals</h2>
            <motion.p
              className="text-xl md:text-2xl font-bold mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              "Shaping the Future: Together for Change"
            </motion.p>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              At Voice of Tamilnadu, we believe that a better future starts with people coming together. Our goal is to
              create lasting impact by empowering communities with the tools and support they need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 text-center group relative overflow-hidden h-full">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${goal.color.split(" ")[1]}, ${goal.color.split(" ")[3]}, ${goal.color.split(" ")[1]})`,
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
                  <div className="absolute inset-[2px] bg-slate-900/90 rounded-3xl" />

                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl md:text-5xl font-black mb-3"
                      style={{
                        background: `linear-gradient(90deg, ${goal.color.split(" ")[1]}, ${goal.color.split(" ")[3]})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {goal.number}
                    </motion.div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">{goal.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed font-light text-sm md:text-base">
                      {goal.description}
                    </p>

                    <motion.div
                      className={`inline-block bg-gradient-to-r ${goal.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {goal.timeline}
                    </motion.div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Mission Statement - Reduced padding */}
      <motion.section
        id="mission"
        className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <FloatingElement delay={0}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </FloatingElement>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black mb-6 text-slate-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Inspiring Hope and Unity
          </motion.h2>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/50 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-light">
              In times of adversity, we help foster a sense of{" "}
              <span className="font-semibold text-blue-600">hope and unity</span>. Through our work, we show that when
              communities come together, they can create meaningful change. We encourage{" "}
              <span className="font-semibold text-indigo-600">resilience</span>, build{" "}
              <span className="font-semibold text-purple-600">trust</span>, and ensure that no one faces their
              challenges alone.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/partnership"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5 mr-3" />
              Join Our Mission
            </motion.a>
            <motion.a
              href="/blog"
              className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 mr-3" />
              Read Our Stories
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
