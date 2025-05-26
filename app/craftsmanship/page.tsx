"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Craftsmanship() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/ittai-Kitchen_Block_Flyover_Video_Ready.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-3xl">
            <h1 className="text-[45px] font-inter font-medium mb-6 leading-tight tracking-wide uppercase">
              Masterful Craftsmanship
            </h1>
            <p className="text-base font-geist-mono font-light tracking-tight">
              Where tradition meets innovation
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/ittai-craft-01.png"
                alt="Craftsmanship Process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Precision Engineering</h3>
              <p className="text-[#4F4F4F] font-geist">
                Our material journey begins with careful selection at the quarry. We personally inspect each stone
                slab, evaluating its structural integrity, color consistency, and unique character. Using traditional
                techniques alongside modern technology, we extract blocks with minimal waste and maximum respect for
                the natural formation.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/ittai-craft-02.png"
                alt="Craftsmanship Process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Artisanal Techniques</h3>
              <p className="text-[#4F4F4F] font-geist">
                Each stone is cut, shaped, and finished by master craftspeople in Italy, using techniques refined over
                generations to highlight the material's natural beauty. Our artisans combine traditional methods with
                cutting-edge technology to achieve perfect precision and finish.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/ittai-craft-03.png"
                alt="Craftsmanship Process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Perfect Installation</h3>
              <p className="text-[#4F4F4F] font-geist">
                The final step brings your selected material into your space, installed with precision by specialists
                who understand the unique properties of each stone type. Our installation team ensures that every
                detail is perfect, creating a seamless integration with your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
