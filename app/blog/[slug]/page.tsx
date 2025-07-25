import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"

const blogPosts = {
  "women-empowerment": {
    title: "Women Empowerment Through Education and Skill Development",
    content: `
      <h2>Introduction</h2>
      <p>Education is the foundation of empowerment. When women have access to quality education and skill development, they gain independence, confidence, and the ability to contribute to society. However, many women in Tamil Nadu still face challenges in accessing education and employment opportunities.</p>
      
      <h2>The Barriers Women Face</h2>
      <ul>
        <li>Lack of access to education due to socio-economic reasons</li>
        <li>Gender-based discrimination in workplaces and society</li>
        <li>Limited opportunities for skill development and entrepreneurship</li>
      </ul>
      
      <h2>How We Are Empowering Women</h2>
      <ul>
        <li>Providing scholarships for higher education</li>
        <li>Offering skill development programs in IT, handicrafts, and entrepreneurship</li>
        <li>Supporting women entrepreneurs with training and mentorship</li>
      </ul>
      
      <h2>Impact Stories</h2>
      <p>A young woman in rural Tamil Nadu who started her own business after completing our skill development program. A mother who gained financial independence through our digital literacy training.</p>
      
      <h2>Call to Action</h2>
      <p>We encourage readers to support or volunteer in women's education programs. Together, we can create a more equitable society where every woman has the opportunity to thrive.</p>
    `,
    author: "Voice of Tamilnadu Team",
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=800",
  },
  "sustainable-development": {
    title: "Sustainable Development and Environmental Protection in Tamil Nadu",
    content: `
      <h2>Introduction</h2>
      <p>Sustainability is not just about protecting the environment—it's about creating a future where people and nature can thrive together. In Tamil Nadu, deforestation, pollution, and climate change pose significant challenges to sustainable development.</p>
      
      <h2>The Environmental Challenges We Face</h2>
      <ul>
        <li>Deforestation and habitat loss</li>
        <li>Water scarcity and pollution</li>
        <li>Plastic waste and improper disposal</li>
      </ul>
      
      <h2>Our Sustainability Initiatives</h2>
      <ul>
        <li>Tree plantation drives to restore green cover</li>
        <li>Water conservation projects in rural areas</li>
        <li>Eco-friendly alternatives to plastic in local markets</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>A village that improved water availability through our rainwater harvesting initiative. A local business that switched to biodegradable packaging with our support.</p>
      
      <h2>Call to Action</h2>
      <p>We invite communities and organizations to participate in environmental programs. Every small action contributes to a larger impact on our planet's future.</p>
    `,
    author: "Voice of Tamilnadu Team",
    date: "2024-01-10",
    image: "/wom-emp2.jpg?height=400&width=800",
  },
  "digital-inclusion": {
    title: "Strengthening Rural Communities Through Digital Inclusion",
    content: `
      <h2>Introduction</h2>
      <p>In today's digital world, access to technology is crucial for growth. Yet, many rural communities in Tamil Nadu lack the necessary digital skills and infrastructure. Bridging this gap is essential for education, employment, and financial inclusion.</p>
      
      <h2>Challenges of Digital Exclusion</h2>
      <ul>
        <li>Limited access to technology in rural areas</li>
        <li>Lack of digital literacy among the elderly and marginalized communities</li>
        <li>Difficulty in accessing online services like banking, healthcare, and education</li>
      </ul>
      
      <h2>How We Are Driving Digital Inclusion</h2>
      <ul>
        <li>Setting up Digital Resource Centers in villages</li>
        <li>Conducting workshops on digital literacy and online safety</li>
        <li>Helping small businesses go digital with e-commerce solutions</li>
      </ul>
      
      <h2>Real-Life Impact</h2>
      <p>A student who gained access to online learning resources and improved their academic performance. A small business owner who expanded their reach through digital marketing.</p>
      
      <h2>Call to Action</h2>
      <p>We encourage donors, trainers, and volunteers to contribute to digital literacy programs. Together, we can ensure that no community is left behind in the digital age.</p>
    `,
    author: "Voice of Tamilnadu Team",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=800",
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

          <div className="flex items-center text-gray-600 mb-6">
            <User className="w-4 h-4 mr-1" />
            <span className="mr-6">{post.author}</span>
            <Calendar className="w-4 h-4 mr-1" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2"
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Share2 className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-600">Share this article</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-700 transition-colors">Facebook</button>
              <button className="text-blue-400 hover:text-blue-500 transition-colors">Twitter</button>
              <button className="text-blue-700 hover:text-blue-800 transition-colors">LinkedIn</button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
          <p className="mb-6">Want to make a difference? Join our mission to empower communities across Tamil Nadu.</p>
          <Link
            href="/partnership"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Us Today
          </Link>
        </div>
      </div>
    </div>
  )
}
