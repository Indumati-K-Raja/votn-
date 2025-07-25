"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    {
      name: "Events",
      href: "/events?filter=upcoming",
     
     
    },
    {
      name: "Partnership",
      href: "/partnership",
      hasDropdown: true,
      dropdownItems: [
        { name: "Volunteer With Us", href: "/partnership?filter=volunteer"},
        { name: "Corporate Partnership", href: "/partnership?filter=corporate"},
        { name: "Join Our Mission", href: "/partnership?filter=mission" },
      ],
    },
    {
      name: "About",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/about" },
        { name: "Our Impact", href: "/blog" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Voice of Tamilnadu" width={220} height={74} className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/partnership"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${item.name}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === `mobile-${item.name}` && (
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600"
                              onClick={() => {
                                setIsOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-orange-600 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/partnership"
                className="block px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium text-center mx-3 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
