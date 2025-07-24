import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Users } from "lucide-react"

export default function Activities() {
  const activities = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Women Empowerment Through Education",
      description:
        "Providing scholarships, skill development programs, and entrepreneurship training to empower women across Tamil Nadu.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/women-empowerment",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Inclusion Initiative",
      description:
        "Setting up Digital Resource Centers and conducting workshops to bridge the digital divide in rural communities.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/digital-inclusion",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Sustainable Development Programs",
      description:
        "Tree plantation drives, water conservation projects, and eco-friendly initiatives for environmental protection.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/sustainable-development",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Major Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our key initiatives that are making a real difference in communities across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 p-2 rounded-full text-orange-600">{activity.icon}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                <Link
                  href={activity.link}
                  className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  )
}
