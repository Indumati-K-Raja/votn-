"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@voiceoftn.org",
      description: "Send us an email anytime",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      description: "Mon-Fri from 9am to 6pm",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Tamil Nadu, India",
      description: "Come say hello at our office",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Weekend support available",
      color: "from-amber-500 to-amber-600",
    },
  ]

  const quickActions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Join Our Team",
      description: "Become a volunteer and make a difference",
      link: "/volunteer#volunteer-forms",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Partnership Inquiry",
      description: "Collaborate with us for greater impact",
      link: "/partnership",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Media & Press",
      description: "Get in touch for media inquiries",
      link: "/contact",
      color: "from-violet-500 to-purple-500",
    },
  ]

  const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Modern Hero Section - Reduced padding */}
      <motion.section
        className="relative py-8 md:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.1, 1],
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
            className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-violet-100/40 to-purple-100/40 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 0.9, 1],
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
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo - Reduced margin */}
            <motion.div
              className="flex justify-center mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-white/50 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Voice of Tamilnadu"
                  width={200}
                  height={80}
                  className="h-12 md:h-16 w-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h1>
              <p className="text-lg md:text-2xl mb-4 md:mb-6 text-slate-600 font-light">We'd Love to Hear From You</p>
            </motion.div>

            <motion.p
              className="text-base md:text-xl mb-6 md:mb-8 text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Have questions, ideas, or want to collaborate? Reach out to us and let's create positive change together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#contact-form"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Send Message
              </motion.a>
              <motion.a
                href="mailto:info@voiceoftn.org"
                className="border-2 border-slate-300 text-slate-700 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Email Directly
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Cards - Reduced padding */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-4 md:mb-6">
              Contact Information
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={index} index={index}>
                <motion.div
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-lg border border-slate-100 text-center group hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white mx-auto mb-4 md:mb-6 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">{info.title}</h3>
                  <p className="text-base md:text-lg font-semibold text-slate-700 mb-1 md:mb-2">{info.details}</p>
                  <p className="text-slate-500 text-sm font-light">{info.description}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Form Section - Reduced padding */}
      <section id="contact-form" className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Enhanced Form */}
            <motion.div
              className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 mb-3 md:mb-4">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 text-base md:text-lg font-light">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 text-slate-800 placeholder-slate-400 text-lg ${
                        focusedField === "name"
                          ? "border-blue-400 ring-4 ring-blue-100 shadow-lg transform scale-[1.02]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {focusedField === "name" && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 text-slate-800 placeholder-slate-400 text-lg ${
                        focusedField === "email"
                          ? "border-blue-400 ring-4 ring-blue-100 shadow-lg transform scale-[1.02]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {focusedField === "email" && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 text-slate-800 placeholder-slate-400 text-lg ${
                        focusedField === "phone"
                          ? "border-blue-400 ring-4 ring-blue-100 shadow-lg transform scale-[1.02]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {focusedField === "phone" && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-3">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 text-slate-800 text-lg appearance-none cursor-pointer ${
                        focusedField === "subject"
                          ? "border-blue-400 ring-4 ring-blue-100 shadow-lg transform scale-[1.02]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {focusedField === "subject" && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl bg-white/70 backdrop-blur-sm transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none text-lg ${
                        focusedField === "message"
                          ? "border-blue-400 ring-4 ring-blue-100 shadow-lg transform scale-[1.02]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      placeholder="Tell us about your inquiry, ideas, or how you'd like to get involved..."
                    />
                    {focusedField === "message" && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-8"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Enhanced Side Panel */}
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quick Actions */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-6 md:mb-8">Quick Actions</h3>
                <div className="space-y-3 md:space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.a
                      key={index}
                      href={action.link}
                      className="flex items-center p-4 md:p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group bg-white/50"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center text-white mr-3 md:mr-4 shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {action.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-base md:text-lg">
                          {action.title}
                        </h4>
                        <p className="text-slate-600 font-light text-sm md:text-base">{action.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time Info */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 md:mb-6">Response Time</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { color: "bg-emerald-500", text: "Email inquiries: Within 24 hours" },
                    { color: "bg-blue-500", text: "Partnership requests: 2-3 business days" },
                    { color: "bg-amber-500", text: "Urgent matters: Same day" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-3 h-3 ${item.color} rounded-full mr-3 md:mr-4 shadow-sm`}></div>
                      <span className="text-slate-700 font-medium text-sm md:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                className="bg-slate-800 text-white rounded-3xl p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Office Hours</h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">Monday - Friday</span>
                    <span className="text-blue-400 font-semibold text-sm md:text-base">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">Saturday</span>
                    <span className="text-blue-400 font-semibold text-sm md:text-base">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">Sunday</span>
                    <span className="text-slate-400 text-sm md:text-base">Closed</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 mt-4 md:mt-6 font-light">
                  Emergency support available 24/7 for urgent community matters.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Reduced padding */}
      <section className="py-4 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-3 md:mb-4">Find Us</h2>
            <p className="text-lg md:text-xl text-slate-600 font-light">We're located in the heart of Tamil Nadu</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl h-64 md:h-80 flex items-center justify-center shadow-lg border border-slate-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-slate-400 mx-auto mb-3 md:mb-4" />
              </motion.div>
              <p className="text-slate-600 text-base md:text-lg font-semibold">Interactive Map Coming Soon</p>
              <p className="text-slate-500 font-light text-sm md:text-base">Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Reduced padding */}
      <motion.section
        className="py-12 md:py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed font-light text-slate-300 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of changemakers who are already part of our mission to transform communities across Tamil
            Nadu.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/partnership"
              className="bg-white text-slate-800 px-6 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Become a Volunteer
            </motion.a>
            <motion.a
              href="/about"
              className="border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
