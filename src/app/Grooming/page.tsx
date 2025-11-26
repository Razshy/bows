"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));
const GroomedCollection = dynamic(() => import('../../components/GroomedCollection'));

export default function GroomingPage() {
  return (
    <div className="relative">
      {/* Background matching homepage */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[#b1f3ff] -z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-[url('/images/background.png')] bg-repeat bg-contain opacity-25"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
      </div>

      <main className="min-h-screen relative">
        <Navbar />

        <div className="relative">
          {/* Hero Section */}
          <section className="relative pt-24 md:pt-40 pb-64 overflow-hidden backdrop-blur-[2px] bg-white/10">
            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
              <div className="bg-white/95 p-8 md:p-10 shadow-lg border border-gray-100 rounded-[12px]">
                <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
                  PET<br />
                  GROOMING
                </h1>

                <p className="text-gray-800 text-base mb-8 font-medium leading-relaxed">
                  Expert grooming by Toni Brose with 22 years of experience.<br />
                  From nail trims to full spa treatments.
                </p>

                <Link
                  href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b1f3ff] text-black px-8 py-3 rounded-[12px] font-medium hover:bg-[#ffda85] transition-all duration-300 inline-flex items-center border-2 border-gray-300"
                >
                  <span>Book Grooming</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full h-[120px] z-20 leading-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <path
                fill="#ffffff"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Gallery - WE GROOM */}
        <GroomedCollection />

        {/* Services Section - FULL GROOM INCLUDES */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="md:w-1/2">
                <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  FULL GROOM<br />INCLUDES
                </h2>
              </div>
              <div className="md:w-1/2 text-right">
                <p className="text-gray-700 text-lg">
                  Everything your pet needs for a complete spa experience
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Nail Trim */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Nail Trim & Dremmel</h3>
                    <p className="text-gray-600 text-sm">Smooth, snag-free paws</p>
                  </div>
                </div>
              </div>

              {/* Pads & Sanitary */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Pads & Sanitary</h3>
                    <p className="text-gray-600 text-sm">Shaved and trimmed by request</p>
                  </div>
                </div>
              </div>

              {/* Ear Cleaning */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Ear Cleaning</h3>
                    <p className="text-gray-600 text-sm">Gentle and thorough care</p>
                  </div>
                </div>
              </div>

              {/* Teeth Brushing */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Teeth Brushing</h3>
                    <p className="text-gray-600 text-sm">Fresh breath</p>
                  </div>
                </div>
              </div>

              {/* Gland Expression */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Gland Expression</h3>
                    <p className="text-gray-600 text-sm">Anal gland care</p>
                  </div>
                </div>
              </div>

              {/* Bath & Style */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-6 hover:border-[#6bcbeb] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#b1f3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Bath & Style</h3>
                    <p className="text-gray-600 text-sm">Blow dry and custom styling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Meet Toni & Book */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Meet Toni Card */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6 text-center md:text-left">
                  <div className="relative w-24 h-24 rounded-[12px] overflow-hidden flex-shrink-0 border-2 border-gray-200">
                    <Image
                      src="/owner/toni.png"
                      alt="Toni Brose"
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                      MEET TONI BROSE
                    </h2>
                  </div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  I&apos;ve been grooming for 22 years. Breed cuts, creative styles, anxious pets. I&apos;ve seen it all and know how to handle each one.
                </p>
                <div className="space-y-3 text-gray-700 text-base leading-relaxed">
                  <p>Two decades of hands-on experience</p>
                  <p>Personalized approach for every pet</p>
                  <p>Quiet, stress-free environment</p>
                  <p>Clear communication throughout</p>
                </div>
              </div>

              {/* Book Today Card */}
              <div className="bg-[#6bcbeb] rounded-[12px] p-8 md:p-10 text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">BOOK TODAY</h3>
                <p className="mb-8 text-white text-lg leading-relaxed">
                  Ready to schedule? Call or book online and we&apos;ll discuss what your pet needs.
                </p>
                <div className="space-y-4 mb-8">
                  <a href="tel:+17639723647" className="block text-white hover:text-white/90 transition-colors">
                    <span className="font-semibold text-lg">(763) 972-3647</span>
                  </a>
                  <a href="mailto:bnbdelano@gmail.com" className="block text-white hover:text-white/90 transition-colors">
                    <span className="font-semibold">bnbdelano@gmail.com</span>
                  </a>
                </div>
                <Link
                  href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#6bcbeb] px-8 py-3 rounded-[12px] font-bold text-center hover:bg-gray-100 transition-all duration-300 border-2 border-white"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
        .wave-divider {
          position: relative;
          width: 100%;
          height: 120px;
          line-height: 0;
          z-index: 20;
          margin-top: -1px;
        }

        .wave {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 768px) {
          .wave-divider {
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
}

