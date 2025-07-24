"use client"

import { useEffect, useState } from "react"
import { Target, Users, Building, Laptop } from "lucide-react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: <Target className="w-8 h-8" />,
      number: 200,
      label: "Startups to Launch",
      suffix: "",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 50000,
      label: "People to Train",
      suffix: "+",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: <Building className="w-8 h-8" />,
      number: 100,
      label: "Community Centers",
      suffix: "",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      number: 80,
      label: "Digital Literacy Goal",
      suffix: "%",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const increment = target / 100
      const timer = setInterval(() => {
        setCurrent((prev) => {
          if (prev < target) {
            return Math.min(prev + increment, target)
          }
          clearInterval(timer)
          return target
        })
      }, 20)

      return () => clearInterval(timer)
    }, [isVisible, target])

    return (
      <span>
        {Math.floor(current).toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section id="stats-section" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Goals by 2030</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ambitious targets that will transform communities across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
