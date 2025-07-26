"use client"

import React from "react"

import type { ReactElement } from "react"
import { useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Users, Building, Code, Megaphone, Calendar, Handshake, Sparkles, ArrowRight, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PartnershipPage(): ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })

  const router = useRouter();

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you soon.")
  }

  const volunteerOpportunities = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech & Digital Support",
      description:
        "Help develop digital tools, manage online platforms, or improve tech-based solutions for community development.",
      benefits: ["Gain real-world tech experience", "Build portfolio projects", "Network with tech professionals"],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Content Creation",
      description:
        "Use your writing, videography, or social media skills to amplify our message and inspire more people.",
      benefits: ["Develop creative skills", "Build media portfolio", "Reach wider audiences"],
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Management",
      description: "Help organize and manage events, fundraising campaigns, and community drives.",
      benefits: ["Event planning experience", "Leadership opportunities", "Community connections"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Engagement",
      description: "Join on-ground initiatives such as awareness campaigns, workshops, and rural development programs.",
      benefits: ["Direct community impact", "Cultural immersion", "Personal fulfillment"],
    },
  ]

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

  const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 overflow-hidden">
      
      {/* Hero Banner */}
      <motion.section
        className="relative py-20 bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 mb-10 overflow-hidden"
        style={{ opacity }}
      >
        {/* Partnership Title with Handshake Icon - Centered at Top of Hero */}
        <div className="w-full flex justify-center items-center pt-8">
          <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 mr-2 md:mr-4 shadow-lg flex-shrink-0">
            <Handshake className="w-6 h-6 md:w-10 md:h-10 text-orange-600" />
          </span>
          <motion.span
            className="text-orange-200/30 text-[5vw] md:text-[6vw] lg:text-[7vw] font-extrabold uppercase tracking-wider md:tracking-widest text-center flex-shrink-0"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #f97316, #ec4899, #8b5cf6, #f97316)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0.1,
              whiteSpace: "nowrap",
            }}
          >
            Partnership
          </motion.span>
        </div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Be the Change:
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background: "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Join Hands with Us
              </motion.span>
            </motion.h1>

           
                      </motion.div>

          {/* Animated Content Card */}
          <motion.div
            className="relative max-w-6xl mx-auto mb-2"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: y2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-white/80 via-orange-50/50 to-pink-50/50 backdrop-blur-sm border border-orange-200/30 shadow-2xl rounded-3xl px-8 md:px-20 py-12 flex flex-col items-center relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, #f97316, #ec4899, #8b5cf6, #f97316)",
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
              <div className="absolute inset-[2px] bg-gradient-to-br from-white/90 via-orange-50/60 to-pink-50/60 rounded-3xl" />

              <div className="relative z-10">
                <motion.p
                  className="text-xl md:text-2xl text-gray-800 text-center font-bold leading-snug mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  At Voice of Tamil Nadu, we believe that sustainable change is built through collective action.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-purple-700 text-center font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Join us in empowering individuals, transforming lives, and shaping a better tomorrow.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.button
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center space-x-2 group"
                  whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/contact#contact-form')}
                  >
                  <span>Start Partnership</span>
                  <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                  <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partnership Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Partner with Us – Collaborate for a Greater Impact
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Strong partnerships drive sustainable change. We collaborate with individuals, corporates, academic
            institutions, NGOs, and government bodies to create innovative solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <AnimatedCard index={0}>
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-green-50 border-2 border-purple-200/50 rounded-2xl p-8 shadow-lg h-full"
                whileHover={{
                  borderColor: "rgba(147, 51, 234, 0.3)",
                  boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.2)",
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mr-4 shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Building className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-purple-700">Corporate Social Responsibility</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Align your company's CSR goals with impactful programs in education, entrepreneurship, healthcare, and
                  sustainability.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Employee volunteer programs
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Skill-based corporate volunteering
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Funding for community projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Technology and resource donations
                  </li>
                </ul>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard index={1}>
              <motion.div
                className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200/50 rounded-2xl p-8 shadow-lg h-full"
                whileHover={{
                  borderColor: "rgba(34, 197, 94, 0.3)",
                  boxShadow: "0 20px 40px -12px rgba(34, 197, 94, 0.2)",
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mr-4 shadow-lg"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-700">NGO & Government Partnerships</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Work with us to scale grassroots initiatives, advocate for policy change, and implement social
                  development projects.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Joint program implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Resource sharing and collaboration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Policy advocacy initiatives
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Research and development projects
                  </li>
                </ul>
              </motion.div>
            </AnimatedCard>
          </div>

          <AnimatedCard index={2}>
            <motion.div
              className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg border border-orange-200/30"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                Why Partner with Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { color: "from-orange-500 to-pink-500", text: "Leverage expertise for meaningful change" },
                  { color: "from-pink-500 to-purple-500", text: "Gain visibility as socially responsible" },
                  { color: "from-purple-500 to-blue-500", text: "Contribute to large-scale impact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full mr-3 shadow-lg`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedCard>
        </motion.div>
      </div>
    </div>
  )
}
