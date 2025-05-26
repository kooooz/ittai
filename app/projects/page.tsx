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
            <div className="text-sm font-geist-mono mb-4">{currentProject.id}</div>
            <h1 className="text-4xl font-geist mb-4">{currentProject.title}</h1>
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
