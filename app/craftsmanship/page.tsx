"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Craftsmanship() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/ittai-Kitchen_Block_Flyover_Video_Ready.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/ittai-craft-01.png"
                    alt="Precision Engineering"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-sm font-geist-mono mb-4">Precision Engineering</h2>
                  <p className="text-sm font-geist text-[#4F4F4F]">
                    Our state-of-the-art machinery and skilled craftsmen work together to create precise, 
                    high-quality stone elements that meet the most demanding specifications.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/ittai-craft-02.png"
                    alt="Artisanal Techniques"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-sm font-geist-mono mb-4">Artisanal Techniques</h2>
                  <p className="text-sm font-geist text-[#4F4F4F]">
                    Combining traditional craftsmanship with modern technology, we create unique pieces 
                    that showcase the natural beauty of stone while meeting contemporary design needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/ittai-craft-03.png"
                    alt="Perfect Installation"
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-sm font-geist-mono mb-4">Perfect Installation</h2>
                  <p className="text-sm font-geist text-[#4F4F4F]">
                    Our experienced installation team ensures that every piece is perfectly placed, 
                    creating seamless transitions and flawless finishes in your space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
