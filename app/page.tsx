import Image from "next/image"
import Footer from "@/components/footer"
import ProjectCarousel from "@/components/project-carousel"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/ittai-hero-image-landing-page.png" alt="Interior Design Hero" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-3xl">
            <h1 className="text-[45px] font-inter font-medium mb-6 leading-tight tracking-wide uppercase">
              Custom build single piece kitchen blocks
            </h1>
            <p className="text-base font-geist-mono font-light tracking-tight">
              Designed in Germany.
              <br />
              Handcrafted in Italy.
            </p>
          </div>
        </div>
      </section>

      {/* First Additional Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-inter">The beauty of mono blocks</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Crafted from nature</h3>
                <p className="text-[#4F4F4F] font-geist">
                  We work exclusively with uniquely selected natural stones from Italy, each block a testament to
                  timeless beauty and raw elegance. These are not just surfaces—they're statements. Solid, enduring, and
                  full of natural character, our kitchen blocks are the centerpiece of a space where life unfolds.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Tailored to fit</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Each piece is custom-adapted to your exact dimensions. Our design process balances form, function, and
                  proportion to ensure your kitchen feels sculptural—yet made to live in. No compromises. Just a perfect
                  fit, made for your home.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Built from experience</h3>
                <p className="text-[#4F4F4F] font-geist">
                  From stone experts and milling specialists to our design team and logistics partners, we only work
                  with the best. The result: a seamless experience, from first sketch to final installation. No stress,
                  just expert hands all the way.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Your signature piece</h3>
                <p className="text-[#4F4F4F] font-geist">
                  This is more than a kitchen—it's your personal highlight. Bold. Refined. Unrepeatable. Let's design
                  something truly yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-geist-mono mb-12 text-center font-normal tracking-wide">Projects</h2>
          <ProjectCarousel />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
