"use client"

import { useState } from "react"
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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  // Get the three visible projects
  const getVisibleProjects = () => {
    const visibleProjects = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length
      visibleProjects.push(projects[index])
    }
    return visibleProjects
  }

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center gap-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="flex-shrink-0 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Projects */}
        <div className="flex-1 flex gap-8">
          {getVisibleProjects().map((project) => (
            <div key={project.id} className="flex-1">
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id === "01"}
                />
              </div>
              <div className="text-xs font-medium mb-2 font-geist-mono tracking-wide text-[#4F4F4F]">
                {project.id}
              </div>
              <h3 className="text-sm font-medium font-inter text-[#4F4F4F]">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
