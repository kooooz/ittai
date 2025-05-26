"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "./logo"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
      <div className="flex items-center justify-between p-6">
        <div className="w-16">
          <Link href="/">
            <Logo color={logoColor} />
          </Link>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className={`flex space-x-8 ${textColor} font-geist text-sm`}>
            <li>
              <Link href="/material" className="hover:underline underline-offset-8 decoration-2">
                Material
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline underline-offset-8 decoration-2">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/craftsmanship" className="hover:underline underline-offset-8 decoration-2">
                Craftsmanship
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div>
          <Link
            href="/contact"
            className="bg-black text-white font-geist-mono text-sm px-4 py-2 hover:bg-black/80 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
