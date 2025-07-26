"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Laptop, PenLine, CalendarCheck, Users, Heart, ArrowRight } from "lucide-react"
import Navbar from "../components/Navbar"

// Modern color palette inspired by the logo
const COLORS = {
  primary: "#FF6B35", // Orange-red from V
  secondary: "#FF8C42", // Orange from O
  accent: "#FFD23F", // Yellow from I
  success: "#06D6A0", // Green from C
  info: "#118AB2", // Blue from E
  dark: "#2D3748",
  light: "#F7FAFC",
}

const volunteerOpportunities = [
  {
    icon: <Laptop className="w-8 h-8 text-white" />,
    title: "Tech & Digital Support",
    description:
      "Help develop digital tools, manage online platforms, or improve tech-based solutions for community development.",
    benefits: ["Gain real-world tech experience", "Build portfolio projects", "Network with tech professionals"],
    color: COLORS.info,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <PenLine className="w-8 h-8 text-white" />,
    title: "Content Creation",
    description:
      "Use your writing, videography, or social media skills to amplify our message and inspire more people.",
    benefits: ["Develop creative skills", "Build media portfolio", "Reach wider audiences"],
    color: COLORS.secondary,
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: "Event Management",
    description: "Help organize and manage events, fundraising campaigns, and community drives.",
    benefits: ["Event planning experience", "Leadership opportunities", "Community connections"],
    color: COLORS.success,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Community Engagement",
    description: "Join on-ground initiatives such as awareness campaigns, workshops, and rural development programs.",
    benefits: ["Direct community impact", "Cultural immersion", "Personal fulfillment"],
    color: COLORS.accent,
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })

  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
          {/* Header Section */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              Volunteer with Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Become a Changemaker</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Are you passionate about making a difference? Our volunteer programs provide opportunities for individuals
              to contribute their skills, time, and expertise to meaningful causes.
            </p>
          </div>

          {/* Volunteer Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {volunteerOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon with Animated Background */}
                <div className="flex items-center mb-6">
                  <div
                    className={`relative p-4 rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    style={{ backgroundColor: opportunity.color }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 rounded-2xl"></div>
                    {opportunity.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {opportunity.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {opportunity.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 flex items-center">
                    <Heart className="w-5 h-5 mr-2" style={{ color: opportunity.color }} />
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-3 text-gray-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Volunteer Form */}
          <div
            className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Form Header with Gradient */}
            <div id="volunteer-forms" className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-12 text-center">
              <h3 className="text-4xl font-black text-white mb-4">Ready to Make an Impact?</h3>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Join our community of changemakers and help us build a better tomorrow for Tamil Nadu.
              </p>
            </div>

            <div className="p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="phone" className="block text-lg font-bold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="organization" className="block text-lg font-bold text-gray-700 mb-3">
                      Organization (if applicable)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
                      placeholder="Your Organization"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="interest" className="block text-lg font-bold text-gray-700 mb-3">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="ngo">NGO Partnership</option>
                    <option value="academic">Academic Collaboration</option>
                    <option value="donation">Resource/Fund Contribution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-3">
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your passion, skills, and how you'd like to contribute to our mission..."
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white shadow-sm focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-5 px-8 rounded-2xl font-black text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 tracking-wide group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join Our Mission
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Contact Information */}
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h4 className="text-2xl font-bold text-gray-800 text-center mb-8">Get in Touch</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-800">Email</p>
                      <p className="text-gray-600">info@voiceoftn.org</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center group">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center group">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-800">Location</p>
                      <p className="text-gray-600">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
