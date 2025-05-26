"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Material() {
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
            <source src="/ittai-Video_Ready_Link_Provided.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Natural Beauty</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  Each stone is unique, with its own character and natural patterns that create 
                  one-of-a-kind pieces for your space.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Quality Selection</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  We source only the highest quality materials, ensuring durability and lasting beauty 
                  in every project.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Expert Craftsmanship</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  Our skilled craftsmen transform raw materials into precise, beautiful elements that 
                  enhance your space.
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
