
"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative">
      {/* Main hero section */}
      <section className="relative pt-40 pb-24 overflow-hidden mt-0 backdrop-blur-[2px] bg-white/10 min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="md:w-[45%] mb-12 md:mb-0 relative">
            {/* Text content container with semi-transparent backdrop */}
            <div className="relative p-6 rounded-xl">
              <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 z-10 relative">
                YOUR<br />
                PUPP&apos;S BEST<br />
                FRIEND
              </h1>

              <p className="text-gray-800 text-base mb-8 max-w-md font-medium">
                Training, grooming to nutrition & exercise, there&apos;s<br />
                caring worth often becomes the family.
              </p>

              <Link
                href="#schedule"
                className="bg-[#fff] text-black px-6 py-3 rounded-[12px] font-medium hover:bg-[#b1f3ff] transition-colors inline-flex items-center border-2 border-gray-200 shadow-sm"
              >
                <span>Book a Schedule</span>
                <span className="ml-2">
                </span>
              </Link>
            </div>
          </div>

          {/* Right side image with blue background */}
          <div className="md:w-[55%] relative">
            {/* Image container with subtle backdrop */}
            <div className="relative p-6 rounded-xl">
              {/* Dog image - positioned to be cut off by the wave */}
              <div className="w-full h-[400px] md:h-[500px] relative z-10">
                <div className="absolute bottom-0 left-0 right-0 pet-image-wrapper">
                  <Image
                    src="/images/pups.png"
                    alt="Happy golden retriever"
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center bottom'
                    }}
                    priority
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider as a separate element */}
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

      <style jsx>{`
        /* Wave styling */
        .wave-divider {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          line-height: 0;
          z-index: 20;
          transform: translateY(1px); /* Ensure no gap between sections */
        }

        .wave {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Pet image positioning */
        .pet-image-wrapper {
          height: 500px;
          bottom: -120px; /* Align with the wave height */
          position: absolute;
        }

        /* Responsive breakpoints */
        @media (max-width: 1440px) {
          .wave-divider {
            height: 100px;
          }
          .pet-image-wrapper {
            height: 480px;
            bottom: -100px; /* Match the wave height */
          }
        }

        @media (max-width: 1280px) {
          .wave-divider {
            height: 90px;
          }
          .pet-image-wrapper {
            height: 460px;
            bottom: -90px; /* Match the wave height */
          }
        }

        @media (max-width: 1024px) {
          .pet-image-wrapper {
            height: 440px;
            bottom: -85px; /* Match the wave height */
          }
        }

        @media (max-width: 768px) {
          .wave-divider {
            height: 80px;
          }
          .pet-image-wrapper {
            height: 420px;
            bottom: -80px; /* Match the wave height */
          }
        }

        @media (max-width: 480px) {
          .wave-divider {
            height: 60px;
          }
          .pet-image-wrapper {
            height: 380px;
            bottom: -60px; /* Match the wave height */
          }
        }
      `}</style>
    </div>
  );
}
