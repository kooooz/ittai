"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    description: "A contemporary kitchen featuring natural stone countertops and minimalist design elements.",
    image: "/ittai-project-01.png",
  },
  {
    id: 2,
    title: "Luxury Bathroom Renovation",
    description: "Complete bathroom transformation with premium materials and custom fixtures.",
    image: "/ittai-project-02.png",
  },
  {
    id: 3,
    title: "Residential Interior Project",
    description: "Comprehensive interior design project showcasing our attention to detail and craftsmanship.",
    image: "/ittai-project-03.png",
  },
  {
    id: 4,
    title: "Commercial Space Design",
    description: "Modern office space featuring custom stone elements and innovative design solutions.",
    image: "/ittai-project-04.png",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-geist mb-4">{currentProject.title}</h1>
            <p className="text-lg text-[#4F4F4F]">{currentProject.description}</p>
          </div>

          <div className="relative aspect-[3/2] mb-12">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={prevProject}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
