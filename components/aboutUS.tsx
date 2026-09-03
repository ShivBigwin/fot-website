"use client";

import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#F0F7FF] to-[#E0EDFF]">
      <div className="container-page">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <span className="eyebrow mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            About FundsOnTime
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
              FundsOnTime
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-ink-500 md:text-lg">
            Get to Know About Company
          </p>
        </div>

        {/* Company Intro with Image */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.png"
                alt="About FundsOnTime"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/10 to-transparent"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#2563EB]/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#2563EB] font-bold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]/20"></div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At FundsOnTime, we are a trusted and established loan lending
                company committed to providing fast and reliable short-term
                payday loans.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                FundsOnTime is acting solely in the capacity of a Trademarked
                brand Name. All loan approval decisions and disbursals are
                exclusively performed by{" "}
                <strong>RAJVIR SECURITIES AND FINANCE PVT. LTD.</strong>
              </p>
              <div className="bg-gradient-to-r from-[#2563EB]/10 to-[#3B82F6]/10 rounded-lg p-4 border border-[#2563EB]/10">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#2563EB]">
                    NBFC registered
                  </span>{" "}
                  with the Reserve Bank of India
                  <br className="hidden sm:block" />
                  <span className="font-mono text-xs text-gray-500">
                    (License No: 05.01321)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid gap-6 sm:grid-cols-3 mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30 hover:-translate-y-1">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F7FF] text-[#2563EB] mb-4">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-ink">Flexible loans</h3>
            <p className="mt-2 text-sm text-ink-500">
              Tailored to your situation
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30 hover:-translate-y-1">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F7FF] text-[#2563EB] mb-4">
              <Zap className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-ink">Fast approval</h3>
            <p className="mt-2 text-sm text-ink-500">Minimal delays</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30 hover:-translate-y-1">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F7FF] text-[#2563EB] mb-4">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold text-ink">
              Transparent terms
            </h3>
            <p className="mt-2 text-sm text-ink-500">Trusted support</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20">
          <Link
            href="https://loanapply.fundsontime.com/auth"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Why Choose FundsOnTime */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">
                FundsOnTime
              </span>
            </h2>
            <p className="mt-2 text-ink-500">
              Trusted Loan Partner for Your Needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB]/20 to-[#3B82F6]/20 text-[#2563EB] mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">Quick Approval</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Get loan approvals in minutes with minimal documentation.
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB]/20 to-[#3B82F6]/20 text-[#2563EB] mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                Secure & Trusted
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Your data is protected with high-level security standards.
              </p>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#2563EB]/10 hover:shadow-xl transition-all hover:border-[#2563EB]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB]/20 to-[#3B82F6]/20 text-[#2563EB] mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-ink">Flexible Loans</h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                Customized short & long-term loan options for every need.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#2563EB]/10 to-[#3B82F6]/5 rounded-2xl p-8 border border-[#2563EB]/10 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB]/20 text-[#2563EB]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals and businesses by providing fast, fair, and
              transparent financial solutions.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#3B82F6]" />
              <span className="text-sm text-gray-500">
                Customer-first approach
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#2563EB]/5 rounded-2xl p-8 border border-[#3B82F6]/10 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6]/20 text-[#3B82F6]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become India's most trusted digital lending platform with
              customer-first values.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#3B82F6]" />
              <span className="text-sm text-gray-500">
                Building trust through transparency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
