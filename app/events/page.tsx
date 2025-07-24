"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function EventsPage() {
  const searchParams = useSearchParams()
  const urlFilter = searchParams.get("filter") || "all"
  const [filter, setFilter] = useState(urlFilter)

  useEffect(() => {
    setFilter(urlFilter)
  }, [urlFilter])

  const events = [
    {
      id: 1,
      title: "Women Entrepreneurship Workshop",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Chennai Community Center",
      type: "workshop",
      status: "upcoming",
      participants: 50,
      image: "/placeholder.svg?height=300&width=400",
      description: "A comprehensive workshop on starting and scaling women-led businesses in Tamil Nadu.",
    },
    {
      id: 2,
      title: "Digital Literacy Drive",
      date: "2024-02-20",
      time: "9:00 AM - 5:00 PM",
      location: "Rural Villages, Thanjavur",
      type: "campaign",
      status: "upcoming",
      participants: 200,
      image: "/placeholder.svg?height=300&width=400",
      description: "Mobile digital literacy program reaching remote villages to bridge the digital divide.",
    },
    {
      id: 3,
      title: "Sustainable Agriculture Summit",
      date: "2024-01-20",
      time: "8:00 AM - 6:00 PM",
      location: "Coimbatore Agricultural College",
      type: "summit",
      status: "past",
      participants: 300,
      image: "/placeholder.svg?height=300&width=400",
      description: "Bringing together farmers, experts, and policymakers to discuss sustainable farming practices.",
    },
    {
      id: 4,
      title: "Youth Leadership Program",
      date: "2024-01-10",
      time: "10:00 AM - 3:00 PM",
      location: "Madurai Youth Center",
      type: "program",
      status: "past",
      participants: 100,
      image: "/placeholder.svg?height=300&width=400",
      description: "Empowering young leaders with skills and knowledge to drive community change.",
    },
  ]

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.status === filter)

  const getStatusColor = (status: string) => {
    return status === "upcoming" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
  }

  const getTypeColor = (type: string) => {
    const colors = {
      workshop: "bg-blue-100 text-blue-800",
      campaign: "bg-orange-100 text-orange-800",
      summit: "bg-purple-100 text-purple-800",
      program: "bg-green-100 text-green-800",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in our community-driven initiatives and be part of the change you want to see.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "all" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            All Events
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "upcoming" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === "past" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-orange-50"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className="relative h-48">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)}`}>
                    {event.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>

                {event.status === "upcoming" && (
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                      Register Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
