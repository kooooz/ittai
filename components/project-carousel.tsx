"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Create an array that includes the last two and first two items for infinite scroll
  const extendedProjects = [
    ...projects.slice(-2),
    ...projects,
    ...projects.slice(0, 2),
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return projects.length - 1
      }
      return prev - 1
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === projects.length - 1) {
        return 0
      }
      return prev + 1
    })
  }

  // Handle infinite scroll transition
  useEffect(() => {
    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setCurrentIndex(projects.length)
      }, 50)
      return () => clearTimeout(timer)
    }
    if (currentIndex === projects.length + 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex + 2) * (100 / 3)}%)`,
          width: `${(extendedProjects.length * 100) / 3}%`,
        }}
      >
        {extendedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="w-1/3 flex-shrink-0 px-4"
          >
            <div className="relative aspect-[4/3] mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-xs font-medium mb-2 font-geist-mono tracking-wide">
              {project.id}
            </div>
            <h3 className="text-lg font-medium font-inter">{project.title}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
