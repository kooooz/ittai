"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  id: string
  title: string
  image: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Mid century kitchen, Los Angeles, USA",
    image: "/project-01.png",
  },
  {
    id: "02",
    title: "Minimalistic block, Berlin, Germany",
    image: "/project-02.png",
  },
  {
    id: "03",
    title: "Rough Stone block kitchen, Oslo, Norway",
    image: "/project-03.png",
  },
  {
    id: "04",
    title: "Loft style kitchen, New York, USA",
    image: "/project-04.png",
  },
  {
    id: "05",
    title: "Grey Stone block, Amsterdam, Netherlands",
    image: "/project-05.png",
  },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Create infinite loop by duplicating projects: [projects, projects, projects]
  const infiniteProjects = [...projects, ...projects, ...projects]

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prev: number) => prev + 1)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prev: number) => prev - 1)
  }

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return

    const timer = setTimeout(() => {
      setIsTransitioning(false)

      // If we've moved past the second set, reset to the beginning of the second set
      if (currentIndex >= projects.length * 2) {
        setCurrentIndex(projects.length)
      }
      // If we've moved before the second set, reset to the end of the second set
      else if (currentIndex < 0) {
        setCurrentIndex(projects.length - 1)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [currentIndex, isTransitioning])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 text-[#4F4F4F] hover:text-black transition-colors" />
        </button>

        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className={`flex ${isTransitioning ? "transition-transform duration-300 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              width: `${(infiniteProjects.length * 100) / 3}%`,
            }}
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${Math.floor(index / projects.length)}-${index % projects.length}`}
                className="w-1/3 px-3"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-geist-mono mb-2 text-[#4F4F4F]">{project.id}</span>
                  <div className="relative aspect-[4/3] mb-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                  <span className="text-[12px] font-geist-mono text-[#4F4F4F]">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-10"
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 text-[#4F4F4F] hover:text-black transition-colors" />
        </button>
      </div>
    </div>
  )
}
