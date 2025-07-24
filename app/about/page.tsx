import { Users, Handshake, Megaphone, Heart, Shield, Lightbulb } from "lucide-react"
import Stats from "../components/Stats"

export default function AboutPage() {
  const roles = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Amplifying Voices of the Underserved",
      description:
        "We give a platform to those whose voices have historically been marginalized. By sharing their stories and struggles, we raise awareness about the issues that matter most to them.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowering Communities to Lead",
      description:
        "We work alongside communities to help them identify their needs and solutions. We provide tools, training, and resources they need to take charge of their own futures.",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaborating for Impact",
      description:
        "We partner with local organizations, government bodies, and corporate stakeholders to build collective impact and maximize the effectiveness of social initiatives.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advocating for Systemic Change",
      description:
        "We advocate for policy reforms and systemic change that will positively affect entire communities. Through research and public dialogues, we ensure rights are prioritized.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Raising Awareness and Educating",
      description:
        "Through campaigns and outreach, we raise awareness of critical issues and educate communities about their rights and the importance of civic engagement.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Providing Essential Support",
      description:
        "We provide essential services and resources to communities in need, from healthcare and education to disaster relief and environmental protection.",
      color: "from-pink-500 to-red-500",
    },
  ]

  const goals = [
    {
      number: "200",
      title: "Startups to Launch",
      description:
        "By 2026, we aim to help start 200 small businesses in technology, agriculture, and handicrafts, creating jobs and improving local economies.",
      timeline: "By 2026",
    },
    {
      number: "50,000",
      title: "Individuals to Train",
      description:
        "By 2025, we plan to train 50,000 people in in-demand skills, helping them get ready for jobs and business opportunities.",
      timeline: "By 2025",
    },
    {
      number: "100",
      title: "Community Centers",
      description:
        "By 2027, we'll open 100 community centers in rural Tamil Nadu providing education, health services, and skill training.",
      timeline: "By 2027",
    },
    {
      number: "80%",
      title: "Digital Literacy Goal",
      description:
        "By 2030, we want 80% of people in Tamil Nadu to be able to use digital tools and technology effectively.",
      timeline: "By 2030",
    },
    {
      number: "50",
      title: "Sustainable Enterprises",
      description:
        "By 2030, we will help start 50 eco-friendly businesses that protect the environment while providing livelihoods.",
      timeline: "By 2030",
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Voice of Tamilnadu</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We see ourselves as catalysts for change, champions of inclusion, and amplifiers of voices that too often go
            unheard. Our role is not just about providing resources but about fostering empowerment, education, and
            long-term sustainable solutions.
          </p>
        </div>
      </section>

      {/* Our Role Section */}
      <section id="role" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work at the intersection of community-driven initiatives and systemic change, ensuring that every
              individual has the opportunity to thrive and contribute to society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 card-hover group">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section id="goals" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Goals</h2>
            <p className="text-2xl text-orange-600 font-semibold mb-4">"Shaping the Future: Together for Change"</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Voice of Tamilnadu, we believe that a better future starts with people coming together. Our goal is to
              create lasting impact by empowering communities with the tools and support they need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{goal.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{goal.description}</p>
                <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {goal.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Mission Statement */}
      <section id="mission" className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Inspiring Hope and Unity</h2>
          <p className="text-xl leading-relaxed mb-8">
            In times of adversity, we help foster a sense of hope and unity. Through our work, we show that when
            communities come together, they can create meaningful change. We encourage resilience, build trust, and
            ensure that no one faces their challenges alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/partnership"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Join Our Mission
            </a>
            <a
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              Read Our Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
