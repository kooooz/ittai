import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ImprintPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 px-6 bg-white flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold font-din-condensed mb-12">Imprint</h1>

          <div className="space-y-8 text-[#4F4F4F] font-geist">
            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">
                Information according to § 5 TMG
              </h2>
              <p>
                Ittai GmbH
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
                <br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Contact</h2>
              <p>
                Phone: +49 30 1234567
                <br />
                Email: info@ittai.com
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Commercial Register</h2>
              <p>
                Register Court: Amtsgericht Berlin-Charlottenburg
                <br />
                Register Number: HRB 123456
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">VAT Identification Number</h2>
              <p>VAT ID according to §27a Umsatzsteuergesetz: DE123456789</p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">
                Responsible for content according to § 55 Abs. 2 RStV
              </h2>
              <p>
                Max Mustermann
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
                <br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Dispute resolution</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (OS):
                https://ec.europa.eu/consumers/odr.
              </p>
              <p className="mt-2">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer
                arbitration board.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Liability for Content</h2>
              <p>
                As service providers, we are liable for own contents of these websites according to Paragraph 7, Section
                1 of the German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 of the German Telemedia
                Act (TMG), we are not obligated to monitor external information transferred or stored or to search for
                circumstances that indicate illegal activity.
              </p>
              <p className="mt-2">
                Obligations to remove or block the use of information under general laws remain unaffected. However,
                liability in this regard is only possible from the moment of knowledge of a specific infringement. Upon
                notification of such infringements, we will remove the content immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Liability for Links</h2>
              <p>
                Our offer includes links to external third-party websites, the content of which we have no influence on.
                Therefore, we cannot assume any liability for this external content. The respective provider or operator
                of the pages is always responsible for the content of the linked pages. The linked pages were checked
                for possible legal violations at the time of linking. Illegal contents were not recognizable at the time
                of linking.
              </p>
              <p className="mt-2">
                However, a permanent control of the contents of the linked pages is not reasonable without concrete
                evidence of a violation of law. Upon notification of violations, we will remove such links immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Copyright</h2>
              <p>
                The contents and works on these pages created by the site operators are subject to German copyright law.
                Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright
                require the written consent of the respective author or creator. Downloads and copies of these pages are
                only permitted for private, non-commercial use.
              </p>
              <p className="mt-2">
                Insofar as the content on this site was not created by the operator, the copyrights of third parties are
                respected. In particular, third-party content is marked as such. Should you nevertheless become aware of
                a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove
                such content immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
