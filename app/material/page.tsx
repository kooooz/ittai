import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MaterialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Material Process */}
      <section className="py-20 px-6 bg-white mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-din-condensed">From quarry to kitchen</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Selection</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Our material journey begins with careful selection at the quarry. We personally inspect each stone
                  slab, evaluating its structural integrity, color consistency, and unique character.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Extraction</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Using traditional techniques alongside modern technology, we extract blocks with minimal waste and
                  maximum respect for the natural formation.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Processing</h3>
                <p className="text-[#4F4F4F] font-geist">
                  Each stone is cut, shaped, and finished by master craftspeople in Italy, using techniques refined over
                  generations to highlight the material's natural beauty.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Installation</h3>
                <p className="text-[#4F4F4F] font-geist">
                  The final step brings your selected material into your space, installed with precision by specialists
                  who understand the unique properties of each stone type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
