"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Users, Building, Heart, Code, Megaphone, Calendar } from "lucide-react"

export default function PartnershipPage() {
  const [activeTab, setActiveTab] = useState("volunteer")
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
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Be the Change: Join Hands with Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Voice of Tamil Nadu, we believe that sustainable change is built through collective action. Join us in
            empowering individuals, transforming lives, and shaping a better tomorrow.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setActiveTab("volunteer")}
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === "volunteer"
                ? "bg-white text-orange-600 border-b-2 border-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Volunteer Opportunities
          </button>
          <button
            onClick={() => setActiveTab("partnership")}
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === "partnership"
                ? "bg-white text-orange-600 border-b-2 border-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Corporate & NGO Partnerships
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-3 font-medium rounded-t-lg transition-colors ${
              activeTab === "contact"
                ? "bg-white text-orange-600 border-b-2 border-orange-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Get in Touch
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === "volunteer" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Volunteer with Us – Become a Changemaker</h2>
              <p className="text-lg text-gray-600 mb-8">
                Are you passionate about making a difference? Our volunteer programs provide opportunities for
                individuals to contribute their skills, time, and expertise to meaningful causes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">{opportunity.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <Heart className="w-4 h-4 text-orange-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Make a Difference?</h3>
                <p className="mb-4">Sign up as a volunteer today and be part of the change!</p>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Volunteer Registration
                </button>
              </div>
            </div>
          )}

          {activeTab === "partnership" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partner with Us – Collaborate for a Greater Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Strong partnerships drive sustainable change. We collaborate with individuals, corporates, academic
                institutions, NGOs, and government bodies to create innovative solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Corporate Social Responsibility</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Align your company's CSR goals with impactful programs in education, entrepreneurship, healthcare,
                    and sustainability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Employee volunteer programs</li>
                    <li>• Skill-based corporate volunteering</li>
                    <li>• Funding for community projects</li>
                    <li>• Technology and resource donations</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">NGO & Government Partnerships</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Work with us to scale grassroots initiatives, advocate for policy change, and implement social
                    development projects.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Joint program implementation</li>
                    <li>• Resource sharing and collaboration</li>
                    <li>• Policy advocacy initiatives</li>
                    <li>• Research and development projects</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Partner with Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Leverage expertise for meaningful change</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Gain visibility as socially responsible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Contribute to large-scale impact</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization (if applicable)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">info@voiceoftn.org</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+91 XXX XXX XXXX</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
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
