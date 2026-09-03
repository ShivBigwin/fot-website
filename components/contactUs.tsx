"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar"; // Import your existing navbar

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-4 md:py-8 bg-gradient-to-br from-cream to-[#FFF5F0]">
        <div className="container-page">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-900" />
              Get in Touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
              Have Questions?{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-ink-500 md:text-lg">
              We're here to help you with any questions about our loan services.
              Reach out to us anytime.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-ink/5 hover:shadow-xl transition-all hover:border-[#FF6666]/30 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient/10 text-blue-900 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-500">
                      Send Email
                    </p>
                    <a
                      href="mailto:info@fundsontime.com"
                      className="text-base font-semibold text-ink hover:text-[#FF6666] transition-colors"
                    >
                      info@fundsontime.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-ink/5 hover:shadow-xl transition-all hover:border-[#FF6666]/30 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient/10 text-blue-900 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-500">
                      Free Call
                    </p>
                    <a
                      href="tel:+919999969918"
                      className="text-base font-semibold text-ink hover:text-indigo-950 transition-colors"
                    >
                      +0731 3560876
                    </a>
                    <p className="text-xs text-ink-400 mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Mon-Sat, 9:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-ink/5 hover:shadow-xl transition-all hover:border-[#FF6666]/30 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient/10 text-blue-900 group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink-500">
                      Reg. Address
                    </p>
                    <p className="text-base font-medium text-ink leading-relaxed">
                      No.434-A, Scheme No.103,
                      <br />
                      Kesar Bagh Road,
                      <br />
                      Indore,M.P.-452012
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact - WhatsApp */}
              <div className="bg-gradient-to-r from-[#FF6666]/10 to-[#FB875D]/10 rounded-2xl p-6 border border-[#FF6666]/10 text-center">
                <p className="text-sm text-ink-500 mb-2">Quick Response</p>
                <a
                  href="https://wa.me/07313560876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ink/5">
                <h3 className="text-2xl font-bold text-ink mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-ink-500 mb-6">
                  We'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-green-700">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-green-600">
                      We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-ink mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink-300 focus:border-[#FF6666] focus:outline-none focus:ring-2 focus:ring-[#FF6666]/20 transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-ink mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink-300 focus:border-[#FF6666] focus:outline-none focus:ring-2 focus:ring-[#FF6666]/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-ink mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink-300 focus:border-[#FF6666] focus:outline-none focus:ring-2 focus:ring-[#FF6666]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-ink mb-1.5"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink focus:border-[#FF6666] focus:outline-none focus:ring-2 focus:ring-[#FF6666]/20 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="loan">Loan Application</option>
                        <option value="support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-ink mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full rounded-xl border border-ink/10 bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-ink-300 focus:border-[#FF6666] focus:outline-none focus:ring-2 focus:ring-[#FF6666]/20 transition-all resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold text-white shadow-brand hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          {/* <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-ink/5">
            <iframe
              src="https://www.google.com/maps/place/Jaistambh+Chowk,+Amrawati+Tahsil,+Amravati,+Maharashtra+444601/@20.9307033,77.7522514,17z/data=!4m15!1m8!3m7!1s0x3bd6a4a8ced03c05:0xefd80ca4a92d5ef7!2sJaistambh+Chowk,+Amrawati+Tahsil,+Amravati,+Maharashtra+444601!3b1!8m2!3d20.9307033!4d77.7548263!16s%2Fg%2F11c2lbpxym!3m5!1s0x3bd6a4a8ced03c05:0xefd80ca4a92d5ef7!8m2!3d20.9307033!4d77.7548263!16s%2Fg%2F11c2lbpxym?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="FundsOnTime Office Location"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
