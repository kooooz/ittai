import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 px-6 bg-white flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold font-din-condensed mb-12">Data Protection</h1>

          <div className="space-y-8 text-[#4F4F4F] font-geist">
            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">1. Data protection at a glance</h2>
              <h3 className="text-xs mb-2 font-geist">General information</h3>
              <p>
                The following information provides a simple overview of what happens to your personal data when you
                visit our website. Personal data is any data that can be used to identify you personally. For detailed
                information on the subject of data protection, please refer to our privacy policy listed below this
                text.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Data collection on our website</h3>
              <p className="mb-2">
                <strong>Who is responsible for data collection on this website?</strong>
              </p>
              <p>
                Data processing on this website is carried out by the website operator. You can find their contact
                details in the imprint of this website.
              </p>

              <p className="mt-4 mb-2">
                <strong>How do we collect your data?</strong>
              </p>
              <p>
                On the one hand, your data is collected when you provide it to us. This can be data that you enter in a
                contact form, for example.
              </p>
              <p className="mt-2">
                Other data is collected automatically by our IT systems when you visit the website. This is primarily
                technical data (e.g., internet browser, operating system, or time of page view). This data is collected
                automatically as soon as you enter our website.
              </p>

              <p className="mt-4 mb-2">
                <strong>What do we use your data for?</strong>
              </p>
              <p>
                Part of the data is collected to ensure error-free provision of the website. Other data may be used to
                analyze your user behavior.
              </p>

              <p className="mt-4 mb-2">
                <strong>What rights do you have regarding your data?</strong>
              </p>
              <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored
                personal data free of charge at any time. You also have the right to request the correction, blocking,
                or deletion of this data. You can contact us at any time at the address given in the imprint if you have
                any further questions on the subject of data protection. Furthermore, you have the right to lodge a
                complaint with the competent supervisory authority.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">
                2. General information and mandatory information
              </h2>
              <h3 className="text-xs mb-2 font-geist">Data protection</h3>
              <p>
                The operators of these pages take the protection of your personal data very seriously. We treat your
                personal data confidentially and in accordance with the statutory data protection regulations and this
                privacy policy.
              </p>
              <p className="mt-2">
                When you use this website, various personal data is collected. Personal data is data that can be used to
                identify you personally. This privacy policy explains what data we collect and what we use it for. It
                also explains how and for what purpose this happens.
              </p>
              <p className="mt-2">
                We point out that data transmission over the Internet (e.g., when communicating by e-mail) may have
                security gaps. Complete protection of data against access by third parties is not possible.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Information about the responsible party</h3>
              <p>The responsible party for data processing on this website is:</p>
              <p className="mt-2">
                Ittai GmbH
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
                <br />
                Germany
              </p>
              <p className="mt-2">
                Phone: +49 30 1234567
                <br />
                Email: info@ittai.com
              </p>
              <p className="mt-2">
                The responsible party is the natural or legal person who, alone or jointly with others, decides on the
                purposes and means of processing personal data (e.g., names, e-mail addresses, etc.).
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Revocation of your consent to data processing</h3>
              <p>
                Many data processing operations are only possible with your express consent. You can revoke consent you
                have already given at any time. An informal e-mail notification to us is sufficient for this purpose.
                The legality of the data processing carried out until the revocation remains unaffected by the
                revocation.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Right to data portability</h3>
              <p>
                You have the right to have data that we process automatically on the basis of your consent or in
                fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.
                If you request the direct transfer of the data to another responsible party, this will only be done to
                the extent that it is technically feasible.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">SSL or TLS encryption</h3>
              <p>
                For security reasons and to protect the transmission of confidential content, such as orders or
                inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can
                recognize an encrypted connection by the fact that the address line of the browser changes from
                "http://" to "https://" and by the lock symbol in your browser line.
              </p>
              <p className="mt-2">
                If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Information, blocking, deletion</h3>
              <p>
                Within the framework of the applicable legal provisions, you have the right to free information about
                your stored personal data, its origin and recipient and the purpose of data processing and, if
                necessary, a right to correction, blocking or deletion of this data at any time. You can contact us at
                any time at the address given in the imprint if you have any further questions on the subject of
                personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">
                3. Data collection on our website
              </h2>
              <h3 className="text-xs mb-2 font-geist">Cookies</h3>
              <p>
                Some of the Internet pages use so-called cookies. Cookies do not cause any damage to your computer and
                do not contain viruses. Cookies serve to make our offer more user-friendly, effective and secure.
                Cookies are small text files that are stored on your computer and saved by your browser.
              </p>
              <p className="mt-2">
                Most of the cookies we use are so-called "session cookies". They are automatically deleted after the end
                of your visit. Other cookies remain stored on your terminal device until you delete them. These cookies
                enable us to recognize your browser the next time you visit our site.
              </p>
              <p className="mt-2">
                You can set your browser so that you are informed about the setting of cookies and only allow cookies in
                individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the
                automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of
                this website may be limited.
              </p>
              <p className="mt-2">
                Cookies that are required to carry out the electronic communication process or to provide certain
                functions that you wish to use (e.g., shopping cart function) are stored on the basis of Art. 6 para. 1
                lit. f DSGVO. The website operator has a legitimate interest in storing cookies for the technically
                error-free and optimized provision of its services. Insofar as other cookies (e.g., cookies for
                analyzing your surfing behavior) are stored, these are treated separately in this privacy policy.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Server log files</h3>
              <p>
                The provider of the pages automatically collects and stores information in so-called server log files,
                which your browser automatically transmits to us. These are:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Host name of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p className="mt-2">This data is not merged with other data sources.</p>
              <p className="mt-2">
                The basis for data processing is Art. 6 para. 1 lit. f DSGVO, which permits the processing of data for
                the fulfillment of a contract or pre-contractual measures.
              </p>
            </div>

            <div>
              <h3 className="text-xs mb-2 font-geist">Contact form</h3>
              <p>
                If you send us inquiries via the contact form, your details from the inquiry form, including the contact
                data you provided there, will be stored by us for the purpose of processing the inquiry and in case of
                follow-up questions. We do not pass on this data without your consent.
              </p>
              <p className="mt-2">
                The processing of the data entered in the contact form is therefore based exclusively on your consent
                (Art. 6 para. 1 lit. a DSGVO). You can revoke this consent at any time. An informal e-mail to us is
                sufficient for this purpose. The legality of the data processing operations carried out until the
                revocation remains unaffected by the revocation.
              </p>
              <p className="mt-2">
                The data you enter in the contact form will remain with us until you request us to delete it, revoke
                your consent to store it, or the purpose for storing the data no longer applies (e.g., after we have
                completed processing your request). Mandatory legal provisions - especially retention periods - remain
                unaffected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
