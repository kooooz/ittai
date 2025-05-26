"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Company() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/ittai-team-01.png"
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-geist mb-6">Our Philosophy</h1>
              <p className="text-lg text-[#4F4F4F] max-w-3xl mx-auto">
                We believe in creating timeless spaces that blend natural materials with contemporary design, 
                focusing on quality craftsmanship and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h2 className="text-xl font-geist mb-4">Design Excellence</h2>
                <p className="text-[#4F4F4F]">
                  Our designs are characterized by clean lines, thoughtful proportions, and a harmonious balance 
                  between form and function.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-geist mb-4">Artisanal Craft</h2>
                <p className="text-[#4F4F4F]">
                  We combine traditional craftsmanship with modern techniques to create unique, high-quality 
                  interior solutions.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-geist mb-4">Material Integrity</h2>
                <p className="text-[#4F4F4F]">
                  We carefully select and work with premium materials, ensuring each element contributes to 
                  the overall quality and longevity of our projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
