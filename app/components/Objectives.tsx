import { Users, Megaphone, Heart, Handshake } from "lucide-react"

export default function Objectives() {
  const objectives = [
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Amplifying Voices",
      description:
        "Giving a platform to marginalized communities and ensuring their stories reach policymakers and society.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Empowering Communities",
      description: "Building local leadership and providing tools for communities to take charge of their own futures.",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Advocating Change",
      description: "Working towards policy reforms and systemic changes that benefit entire communities and regions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Collaborating for Impact",
      description: "Partnering with organizations, government bodies, and stakeholders to maximize social impact.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work at the intersection of community-driven initiatives and systemic change, ensuring every individual
            has the opportunity to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover group">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${objective.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{objective.title}</h3>
              <p className="text-gray-600 leading-relaxed">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
