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
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Design Excellence</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  We combine innovative design with timeless aesthetics, creating spaces that are both 
                  beautiful and functional.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Artisanal Craft</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  Our skilled craftsmen bring decades of experience to every project, ensuring the highest 
                  quality in every detail.
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-sm font-geist-mono mb-4">Material Integrity</h2>
                <p className="text-sm font-geist text-[#4F4F4F]">
                  We carefully select and work with the finest materials, creating pieces that stand the 
                  test of time.
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
