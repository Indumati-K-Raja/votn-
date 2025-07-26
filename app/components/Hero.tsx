"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mouse } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-img.png')" }}
    >
      {/* Overlay for darkening the image, optional */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl sm:text-5xl text-white-900 lg:text-7xl font-bold mb-6 leading-tight">
            Shaping the Future:
            <span className="block text-yellow-300 animate-pulse">Together for Change</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Empowering communities, amplifying voices, and advocating for systemic change across Tamil Nadu
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/partnership"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Our Mission
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() => {
            const el = document.getElementById("objectives");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="relative mt-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center group focus:outline-none"
        >
          <Mouse size={38} className="text-white/80 drop-shadow-lg animate-bounce group-hover:scale-110 group-active:scale-95 group-hover:yellow-300 " />
          <span className="block w-2 h-2 mt-2 rounded-full bg-white/80 animate-bounce group-hover:bg-yellow-300 transition-colors " />
        </button>
      </div>
    </section>
  )
}
