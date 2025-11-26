"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

export default function AboutPage() {
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
        <section className="relative pt-24 md:pt-40 pb-24 overflow-hidden backdrop-blur-[2px] bg-white/10">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <div className="bg-white/95 p-8 md:p-10 shadow-lg border border-gray-100 rounded-[12px]">
              <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
                ABOUT<br />
                US
              </h1>

              <p className="text-gray-800 text-base mb-6 font-medium leading-relaxed">
                Family-owned pet services in Delano. 21 years of experience in grooming, boarding, and daycare.
              </p>

              <p className="text-gray-700 text-sm mb-8 leading-relaxed">
                We provide quality care with a knowledgeable staff, clean facility, and commitment to your pet&apos;s well-being.
              </p>

              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b1f3ff] text-black px-8 py-3 rounded-[12px] font-medium hover:bg-[#ffda85] transition-all duration-300 inline-flex items-center border-2 border-gray-300"
              >
                <span>Book A Visit</span>
              </Link>
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

        {/* Highlights Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Family Owned</h3>
                <p className="text-gray-700">21 years serving Delano</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">All-In-One</h3>
                <p className="text-gray-700">Grooming, boarding, and daycare</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Safety First</h3>
                <p className="text-gray-700">Clean facility, secure yards, trained staff</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values & CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Values Card */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8 md:p-10 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                  WHY CHOOSE US
                </h2>
                <div className="space-y-6 inline-block text-left w-full">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Compassion</h3>
                    <p className="text-gray-700 text-sm">Gentle handling and individual attention for every pet</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Expertise</h3>
                    <p className="text-gray-700 text-sm">Experienced staff trained in best practices</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Community</h3>
                    <p className="text-gray-700 text-sm">Neighbors first, partnering with local families</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#6bcbeb] rounded-[12px] p-8 md:p-10 text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">GET IN TOUCH</h3>
                <p className="mb-8 text-white text-lg leading-relaxed">
                  Ready to book? Have questions? We&apos;re here to help.
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
                  Book Online
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

