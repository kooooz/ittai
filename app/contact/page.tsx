"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 px-6 bg-white flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold font-din-condensed mb-12">Contact</h1>

          {isSubmitted ? (
            <div className="text-[#4F4F4F] font-geist">
              <p>Thank you for your message. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium mb-2 font-geist-mono tracking-wide text-[#4F4F4F]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-[#4F4F4F] bg-transparent py-2 px-0 text-[#4F4F4F] font-geist focus:outline-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium mb-2 font-geist-mono tracking-wide text-[#4F4F4F]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-[#4F4F4F] bg-transparent py-2 px-0 text-[#4F4F4F] font-geist focus:outline-none focus:ring-0 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium mb-2 font-geist-mono tracking-wide text-[#4F4F4F]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-b border-[#4F4F4F] bg-transparent py-2 px-0 text-[#4F4F4F] font-geist focus:outline-none focus:ring-0 focus:border-black resize-none"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-2 rounded-none hover:bg-[#333] transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4F4F4F] font-geist">
            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Berlin Studio</h2>
              <p>
                Musterstraße 123
                <br />
                10115 Berlin
                <br />
                Germany
              </p>
              <p className="mt-4">
                Phone: +49 30 1234567
                <br />
                Email: berlin@ittai.com
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium mb-3 font-geist-mono tracking-wide">Italy Workshop</h2>
              <p>
                Via Esempio 45
                <br />
                20123 Milano
                <br />
                Italy
              </p>
              <p className="mt-4">
                Phone: +39 02 1234567
                <br />
                Email: milano@ittai.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
