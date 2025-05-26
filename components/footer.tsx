import Link from "next/link"
import Logo from "./logo"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-white">
      <div className="w-full h-px bg-[#4F4F4F] mb-8"></div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-16 mb-6 md:mb-0">
            <Logo />
          </div>

          <nav className="flex-grow text-center mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-geist text-[#4F4F4F]">
              <li>
                <Link href="/imprint" className="hover:underline">
                  Imprint
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="hover:underline">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:underline">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ittai.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-xs font-geist text-[#4F4F4F]">
            <p>Copyright 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
