import Header from "@/components/header"
import Footer from "@/components/footer"

const featuredProjects = [
  {
    id: "01",
    title: "Mid century kitchen, Los Angeles, USA",
    description:
      "A harmonious blend of mid-century modern aesthetics and contemporary functionality, featuring a striking island crafted from Italian Calacatta marble.",
  },
  {
    id: "02",
    title: "Minimalistic block, Berlin, Germany",
    description:
      "Pure geometric precision defines this minimalist Berlin kitchen, where a monolithic granite island creates a powerful centerpiece in a restrained space.",
  },
  {
    id: "03",
    title: "Rough Stone block kitchen, Oslo, Norway",
    description:
      "Embracing the raw beauty of natural stone, this Oslo kitchen features a textured basalt island that celebrates the material's volcanic origins.",
  },
  {
    id: "04",
    title: "Loft style kitchen, New York, USA",
    description:
      "Industrial heritage meets luxury in this New York loft, where a substantial travertine island anchors the open-concept living space.",
  },
  {
    id: "05",
    title: "Grey Stone block, Amsterdam, Netherlands",
    description:
      "Subtle sophistication defines this Amsterdam kitchen, with a precisely crafted grey limestone island that complements the canal house's historic character.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Projects List */}
      <section className="py-20 px-6 bg-white mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="grid grid-cols-[auto_1fr] gap-8">
                <div className="text-[#4F4F4F] font-geist-mono text-xs">{project.id}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 font-din-condensed">{project.title}</h3>
                  <p className="text-[#4F4F4F] font-geist text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
