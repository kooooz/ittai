import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

const inter = localFont({
  src: "../public/fonts/Inter_28pt-Regular.ttf",
  variable: "--font-inter",
})

const geist = localFont({
  src: "../public/fonts/Geist-Regular.ttf",
  variable: "--font-geist",
})

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Light.ttf",
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
        className={`${inter.variable} ${geist.variable} ${geistMono.variable} font-geist bg-[#F4F4F4] text-[#4F4F4F]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
