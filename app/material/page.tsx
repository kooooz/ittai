"use client"

import Image from "next/image"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Material() {
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
            <source src="/ittai-Video_Ready_Link_Provided.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-3xl">
            <h1 className="text-[45px] font-inter font-medium mb-6 leading-tight tracking-wide uppercase">
              Natural Stone Selection
            </h1>
            <p className="text-base font-geist-mono font-light tracking-tight">
              Each piece tells a story of time and nature
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-inter">Our Materials</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Natural Beauty</h3>
                <p className="text-[#4F4F4F] font-geist">
                  We work exclusively with uniquely selected natural stones from Italy, each block a testament to
                  timeless beauty and raw elegance. These are not just surfaces—they're statements. Solid, enduring, and
                  full of natural character, our kitchen blocks are the centerpiece of a space where life unfolds.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Quality Selection</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Each piece is carefully selected for its unique characteristics and quality. Our design process balances
                  form, function, and proportion to ensure your kitchen feels sculptural—yet made to live in. No
                  compromises. Just a perfect fit, made for your home.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Expert Craftsmanship</h3>
                <p className="text-[#4F4F4F] font-geist">
                  From stone experts and milling specialists to our design team and logistics partners, we only work
                  with the best. The result: a seamless experience, from first sketch to final installation. No stress,
                  just expert hands all the way.
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
