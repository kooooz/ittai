import type React from "react"
import "./globals.css"
import { Rubik, Assistant, Geist as Geist_Sans, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
})

const geist = Geist_Sans({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-geist-mono",
})

// Neue Haas Grotesk (similar to Helvetica)
const neueHaasGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplay-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
})

// Montreal Font
const montreal = localFont({
  src: [
    {
      path: "../public/fonts/Montreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montreal",
})

// DIN Condensed Font
const dinCondensed = localFont({
  src: [
    {
      path: "../public/fonts/DINCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DINCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-din-condensed",
})

export const metadata = {
  title: "Interior Design Studio",
  description: "Sleek and minimal interior design company",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${assistant.variable} ${geist.variable} ${geistMono.variable} ${neueHaasGrotesk.variable} ${montreal.variable} ${dinCondensed.variable} font-assistant bg-[#F4F4F4] text-[#4F4F4F]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
