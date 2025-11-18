"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));
const GroomedCollection = dynamic(() => import('../../components/GroomedCollection'));

const services = [
  { title: 'Nail Trim & Dremmel', desc: 'Smooth, snag-free paws' },
  { title: 'Pads & Sanitary', desc: 'Shaved and trimmed by request' },
  { title: 'Ear Cleaning', desc: 'Gentle and thorough care' },
  { title: 'Teeth Brushing', desc: 'Fresh breath' },
  { title: 'Gland Expression', desc: 'Anal gland care' },
  { title: 'Bath & Style', desc: 'Blow dry and custom styling' },
];

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

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden backdrop-blur-[2px] bg-white/10">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Content Card */}
              <div className="relative">
                <div className="bg-white/95 p-8 md:p-10 shadow-lg border border-gray-100 rounded-[12px]">
                  <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
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

              {/* Right Image */}
              <div className="relative">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src="/groom/groom.png"
                    alt="Groomed pet"
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    priority
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="wave"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                  MEET TONI BROSE
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  I've been grooming for 22 years. Breed cuts, creative styles, anxious pets—I've seen it all and know how to handle each one.
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
                  Ready to schedule? Call or book online and we'll discuss what your pet needs.
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

