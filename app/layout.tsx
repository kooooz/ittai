import type React from "react"
import "./globals.css"
import { Rubik, Assistant, Geist as Geist_Sans, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

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
        className={`${rubik.variable} ${assistant.variable} ${geist.variable} ${geistMono.variable} font-assistant bg-[#F4F4F4] text-[#4F4F4F]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
