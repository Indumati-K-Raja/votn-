"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, Phone, MapPin, Users, Building, Heart, Code, Megaphone, Calendar, Handshake, UserPlus, MessageCircle } from "lucide-react"

export default function PartnershipPage() {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")
  const [activeTab, setActiveTab] = useState("volunteer")

  useEffect(() => {
    if (filter === "volunteer") setActiveTab("volunteer")
    else if (filter === "corporate") setActiveTab("partnership")
    else if (filter === "mission") setActiveTab("contact")
  }, [filter])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will get back to you soon.")
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F37021]/10 via-white to-[#5B4B9A]/10">
      {/* Hero Banner */}
      <section className="relative py-20 bg-white mb-10 border-b border-[#E6007E]/10 overflow-hidden">
        {/* Oversized background word with icon on the left */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 flex items-center z-0 py-16 select-none pointer-events-none">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F37021]/10 mr-4">
            <Handshake className="w-8 h-8 text-[#F37021]" />
          </span>
          <span className="text-[#F37021]/10 text-[7vw] font-extrabold uppercase tracking-widest">Partnership</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center pt-32">
          {/* Minimal icon and accent dot */}
          <div className="flex items-center gap-2 mb-6">
          
            
          </div>
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5B4B9A] mb-6 text-center tracking-tight">
            Be the Change: <span className="text-[#E6007E]">Join Hands with Us</span>
          </h1>
          {/* Redesigned subheading/mission card */}
          <div className="relative max-w-5xl mx-auto mb-2">
            <div className="bg-gradient-to-br from-[#F37021]/10 via-[#E6007E]/5 to-[#5B4B9A]/10 border-l-4 border-[#E6007E] shadow-xl rounded-2xl px-8 md:px-20 py-10 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E6007E] block"></span>
                <span className="w-2 h-2 rounded-full bg-[#5B4B9A] block"></span>
                <span className="w-2 h-2 rounded-full bg-[#3CB54A] block"></span>
              </div>
              <p className="text-xl md:text-2xl text-[#222] text-center font-semibold leading-snug mb-2">
                At Voice of Tamil Nadu, we believe that sustainable change is built through collective action.
              </p>
              <p className="text-lg md:text-xl text-[#5B4B9A] text-center font-medium">
                Join us in empowering individuals, transforming lives, and shaping a better tomorrow.
          </p>
            </div>
          </div>
        </div>
      </section>

        {/* Tab Navigation */}
      <div className="flex justify-center mb-10 gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("volunteer")}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow transition-all duration-200 text-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#E6007E] ${
              activeTab === "volunteer"
              ? "bg-[#E6007E] text-white border-[#E6007E] scale-105"
              : "bg-white text-[#E6007E] border-[#E6007E]/30 hover:bg-[#E6007E]/10"
            }`}
          >
          <UserPlus className="w-6 h-6" /> Volunteer
          </button>
          <button
            onClick={() => setActiveTab("partnership")}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow transition-all duration-200 text-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#5B4B9A] ${
              activeTab === "partnership"
              ? "bg-[#5B4B9A] text-white border-[#5B4B9A] scale-105"
              : "bg-white text-[#5B4B9A] border-[#5B4B9A]/30 hover:bg-[#5B4B9A]/10"
            }`}
          >
          <Building className="w-6 h-6" /> Partnership
          </button>
          <button
            onClick={() => setActiveTab("contact")}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow transition-all duration-200 text-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#3CB54A] ${
              activeTab === "contact"
              ? "bg-[#3CB54A] text-white border-[#3CB54A] scale-105"
              : "bg-white text-[#3CB54A] border-[#3CB54A]/30 hover:bg-[#3CB54A]/10"
            }`}
          >
          <MessageCircle className="w-6 h-6" /> Contact
          </button>
        </div>

        {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/90 rounded-3xl shadow-2xl p-10 md:p-16">
          {activeTab === "volunteer" && (
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#E6007E] mb-6 text-center">Volunteer with Us – Become a Changemaker</h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                Are you passionate about making a difference? Our volunteer programs provide opportunities for individuals to contribute their skills, time, and expertise to meaningful causes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#F37021]/10 via-white to-[#E6007E]/10 border-2 border-[#E6007E]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#E6007E]/10 p-4 rounded-full text-[#E6007E] mr-4 shadow">
                        {opportunity.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#5B4B9A]">{opportunity.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{opportunity.description}</p>
                    <div>
                      <h4 className="font-semibold text-[#E6007E] mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {opportunity.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <Heart className="w-4 h-4 text-[#F37021] mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-[#F37021] via-[#E6007E] to-[#5B4B9A] rounded-2xl p-8 text-white text-center shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Ready to Make a Difference?</h3>
                <p className="mb-4">Sign up as a volunteer today and be part of the change!</p>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="bg-white text-[#E6007E] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#E6007E]/10 transition-colors shadow-md"
                >
                  Volunteer Registration
                </button>
              </div>
            </div>
          )}

          {activeTab === "partnership" && (
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B4B9A] mb-6 text-center">
                Partner with Us – Collaborate for a Greater Impact
              </h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                Strong partnerships drive sustainable change. We collaborate with individuals, corporates, academic institutions, NGOs, and government bodies to create innovative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="bg-gradient-to-br from-[#5B4B9A]/10 to-[#3CB54A]/10 border-2 border-[#5B4B9A]/20 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Building className="w-10 h-10 text-[#5B4B9A] mr-4" />
                    <h3 className="text-xl font-bold text-[#5B4B9A]">Corporate Social Responsibility</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Align your company's CSR goals with impactful programs in education, entrepreneurship, healthcare, and sustainability.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Employee volunteer programs</li>
                    <li>• Skill-based corporate volunteering</li>
                    <li>• Funding for community projects</li>
                    <li>• Technology and resource donations</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#3CB54A]/10 to-[#5B4B9A]/10 border-2 border-[#3CB54A]/20 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Users className="w-10 h-10 text-[#3CB54A] mr-4" />
                    <h3 className="text-xl font-bold text-[#3CB54A]">NGO & Government Partnerships</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Work with us to scale grassroots initiatives, advocate for policy change, and implement social development projects.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Joint program implementation</li>
                    <li>• Resource sharing and collaboration</li>
                    <li>• Policy advocacy initiatives</li>
                    <li>• Research and development projects</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#E6007E]/10 via-[#3CB54A]/10 to-[#5B4B9A]/10 rounded-2xl p-8 text-[#5B4B9A] text-center shadow-lg">
                <h3 className="text-xl font-bold mb-4">Why Partner with Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#F37021] rounded-full mr-3"></div>
                    <span>Leverage expertise for meaningful change</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#E6007E] rounded-full mr-3"></div>
                    <span>Gain visibility as socially responsible</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#3CB54A] rounded-full mr-3"></div>
                    <span>Contribute to large-scale impact</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#3CB54A] mb-6 text-center">Get in Touch</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#3CB54A]/30">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#5B4B9A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B4B9A] focus:border-transparent"
                      />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#E6007E] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-transparent"
                      />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#F37021] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37021] focus:border-transparent"
                      />
                    </div>
                    <div>
                        <label htmlFor="organization" className="block text-sm font-semibold text-[#3CB54A] mb-2">
                        Organization (if applicable)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3CB54A] focus:border-transparent"
                      />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold text-[#5B4B9A] mb-2">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B4B9A] focus:border-transparent"
                      >
                        <option value="">Select an option</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="corporate">Corporate Partnership</option>
                        <option value="ngo">NGO Partnership</option>
                        <option value="academic">Academic Collaboration</option>
                        <option value="donation">Resource/Fund Contribution</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#E6007E] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your interest and how you'd like to contribute..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#F37021] via-[#E6007E] to-[#5B4B9A] text-white py-3 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-[#3CB54A]/10 to-[#5B4B9A]/10 rounded-2xl p-8 shadow-lg border border-[#3CB54A]/20 flex flex-col justify-between">
                  <h3 className="text-2xl font-bold text-[#3CB54A] mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-[#E6007E] mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-700">info@voiceoftn.org</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-[#F37021] mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-700">+91 XXX XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-[#3CB54A] mr-4" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-700">Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white rounded-lg border border-[#3CB54A]/20">
                    <h4 className="font-semibold text-[#5B4B9A] mb-2">Quick Response</h4>
                    <p className="text-sm text-gray-600">
                      We typically respond to inquiries within 24-48 hours. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
