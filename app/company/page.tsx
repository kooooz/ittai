"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Company() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/ittai-team-01.png"
            alt="Our Team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-3xl">
            <h1 className="text-[45px] font-inter font-medium mb-6 leading-tight tracking-wide uppercase">
              Our Story
            </h1>
            <p className="text-base font-geist-mono font-light tracking-tight">
              A journey of passion and precision
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-inter">Our Philosophy</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Design Excellence</h3>
                <p className="text-[#4F4F4F] font-geist">
                  We believe in the power of exceptional design. Every project begins with a deep understanding of
                  space, function, and the unique character of natural materials. Our German design team brings
                  precision and innovation to every concept.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Artisanal Craft</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Our Italian craftspeople combine centuries of tradition with modern techniques. Each piece is
                  carefully shaped, finished, and perfected by hand, ensuring that every detail meets our exacting
                  standards.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Material Integrity</h3>
                <p className="text-[#4F4F4F] font-geist">
                  We work exclusively with the finest natural stones, selected for their unique character and
                  enduring beauty. Each material tells its own story, and we honor that story in every piece we
                  create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
