"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: "01",
    title: "Mid Century Kitchen",
    image: "/ittai-project-01-mid-century-kitchen.png",
  },
  {
    id: "02",
    title: "Minimalistic Block",
    image: "/ittai-project-02-minimalistic-block.png",
  },
  {
    id: "03",
    title: "Grey Stone Block",
    image: "/ittai-project-03-grey-stone-block.png",
  },
  {
    id: "04",
    title: "Loft Style Kitchen",
    image: "/ittai-project-04-loft-style-kitchen.png",
  },
  {
    id: "05",
    title: "Rough Stone Block Kitchen",
    image: "/ittai-project-03-rough-stone-block-kitchen.png",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Projects Carousel */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-3xl">
            <div className="text-xs font-medium mb-2 font-geist-mono tracking-wide">
              {projects[currentIndex].id}
            </div>
            <h1 className="text-[45px] font-inter font-medium mb-6 leading-tight tracking-wide uppercase">
              {projects[currentIndex].title}
            </h1>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
