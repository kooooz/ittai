"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-[#4F4F4F]"
  const logoColor = isHomePage && !isScrolled ? "white" : "#4F4F4F"
  const bgColor = isScrolled ? "bg-white shadow-sm" : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="w-16">
            <Logo color={logoColor} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/projects" className={`text-sm font-geist ${textColor}`}>
              Projects
            </Link>
            <Link href="/material" className={`text-sm font-geist ${textColor}`}>
              Material
            </Link>
            <Link href="/craftsmanship" className={`text-sm font-geist ${textColor}`}>
              Craftsmanship
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-sm font-geist text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/projects"
                  className="block text-sm font-geist text-[#4F4F4F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/material"
                  className="block text-sm font-geist text-[#4F4F4F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Material
                </Link>
              </li>
              <li>
                <Link
                  href="/craftsmanship"
                  className="block text-sm font-geist text-[#4F4F4F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="block text-sm font-geist text-[#4F4F4F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-sm font-geist text-white bg-black px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
