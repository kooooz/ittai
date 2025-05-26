import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CraftsmanshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image src="/craftsmanship-hero.png" alt="Master Craftspeople" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-medium mb-16 font-geist-mono tracking-wide text-center">Our process</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            <div>
              <div className="relative aspect-square mb-6">
                <Image src="/craftsmanship-design.png" alt="Design Process" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">German design precision</h4>
              <p className="text-[#4F4F4F] font-geist">
                Our design process begins in Germany, where our team develops each kitchen block concept with meticulous
                attention to proportion, function, and material character. Every dimension is considered, every detail
                refined.
              </p>
            </div>

            <div>
              <div className="relative aspect-square mb-6">
                <Image src="/craftsmanship-material.png" alt="Material Selection" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Material selection</h4>
              <p className="text-[#4F4F4F] font-geist">
                Each project begins with the careful selection of the perfect stone. We work directly with quarries to
                identify blocks with exceptional character, considering both aesthetic qualities and structural
                integrity.
              </p>
            </div>

            <div>
              <div className="relative aspect-square mb-6">
                <Image src="/craftsmanship-cutting.png" alt="Precision Cutting" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Precision cutting</h4>
              <p className="text-[#4F4F4F] font-geist">
                Using advanced CNC technology guided by master technicians, we cut each stone with sub-millimeter
                precision. This marriage of traditional knowledge and modern tools ensures perfect execution of complex
                forms.
              </p>
            </div>

            <div>
              <div className="relative aspect-square mb-6">
                <Image src="/craftsmanship-finishing.png" alt="Hand Finishing" fill className="object-cover" />
              </div>
              <h4 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Hand finishing</h4>
              <p className="text-[#4F4F4F] font-geist">
                The final transformation happens by hand. Our artisans apply traditional techniques to create textured
                surfaces, polished edges, and seamless joints that highlight each stone's unique character.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
