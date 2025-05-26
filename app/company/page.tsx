import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CompanyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image src="/company-hero.png" alt="Company Workshop" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-[45px] font-bold text-white font-din-condensed leading-tight tracking-wide small-caps max-w-2xl">
              A company built on material passion and design excellence
            </h1>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-inter">Our story</h2>
            </div>
            <div>
              <p className="text-[#4F4F4F] font-geist mb-8">
                Founded in 2015, our company emerged from a collaboration between German design precision and Italian
                craftsmanship tradition. What began as a single project—creating a monolithic kitchen island for a
                Berlin residence—evolved into a specialized studio dedicated to pushing the boundaries of what's
                possible with natural stone.
              </p>
              <p className="text-[#4F4F4F] font-geist">
                Today, we maintain studios in Berlin and northern Italy, bringing together an international team united
                by a shared passion for exceptional materials and uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-medium mb-16 font-geist-mono tracking-wide text-center">Our values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            <div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Material integrity</h4>
              <p className="text-[#4F4F4F] font-geist">
                We believe in honoring the inherent character of natural materials, designing with rather than against
                their unique properties and variations.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Precision without compromise</h4>
              <p className="text-[#4F4F4F] font-geist">
                From initial measurements to final installation, we maintain exacting standards at every stage,
                recognizing that excellence emerges from countless small decisions made with care.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Collaborative creation</h4>
              <p className="text-[#4F4F4F] font-geist">
                We view each project as a partnership between client, designer, and craftsperson, with the best results
                emerging from open dialogue and shared vision.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Enduring design</h4>
              <p className="text-[#4F4F4F] font-geist">
                We create for longevity, both in physical durability and aesthetic relevance, believing that truly
                sustainable design must transcend trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image src="/team-designer.png" alt="Lead Designer" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-1 font-geist-mono tracking-wide">Markus Schmidt</h4>
              <p className="text-[#4F4F4F] font-geist text-sm">Design Director</p>
            </div>

            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image src="/team-craftsman.png" alt="Master Craftsman" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-1 font-geist-mono tracking-wide">Paolo Ricci</h4>
              <p className="text-[#4F4F4F] font-geist text-sm">Master Craftsman</p>
            </div>

            <div>
              <div className="relative aspect-[3/4] mb-4">
                <Image src="/team-material.png" alt="Material Specialist" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-1 font-geist-mono tracking-wide">Elena Rossi</h4>
              <p className="text-[#4F4F4F] font-geist text-sm">Material Specialist</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
