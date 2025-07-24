import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "women-empowerment",
      title: "Women Empowerment Through Education and Skill Development",
      excerpt:
        "Education is the foundation of empowerment. When women have access to quality education and skill development, they gain independence, confidence, and the ability to contribute to society.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Voice of Tamilnadu Team",
      date: "2024-01-15",
      category: "Education",
    },
    {
      id: "sustainable-development",
      title: "Sustainable Development and Environmental Protection in Tamil Nadu",
      excerpt:
        "Sustainability is not just about protecting the environment—it's about creating a future where people and nature can thrive together. In Tamil Nadu, we face significant environmental challenges.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Voice of Tamilnadu Team",
      date: "2024-01-10",
      category: "Environment",
    },
    {
      id: "digital-inclusion",
      title: "Strengthening Rural Communities Through Digital Inclusion",
      excerpt:
        "In today's digital world, access to technology is crucial for growth. Yet, many rural communities in Tamil Nadu lack the necessary digital skills and infrastructure.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Voice of Tamilnadu Team",
      date: "2024-01-05",
      category: "Technology",
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest insights, stories, and initiatives that are making a difference in Tamil Nadu.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors group-hover:translate-x-1 duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
