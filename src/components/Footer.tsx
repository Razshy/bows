import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Wave divider at the top of footer */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-white py-16">
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            {/* Logo and tagline */}
            <div className="md:w-1/3">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/branding/logo.svg"
                  alt="Bubbles & Bows"
                  width={200}
                  height={55}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-600 mb-6 max-w-xs">
                Premium pet grooming, boarding and daycare services for your furry friends. We treat your pets like family.
              </p>
              <div className="flex space-x-3">
                <Link
                  href="https://www.facebook.com/delano.pets"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bubbles & Bows on Facebook"
                  className="bg-[#6bcbeb]/10 h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#6bcbeb]/20 transition-colors"
                >
                  <svg className="h-5 w-5 text-[#6bcbeb]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="md:w-1/4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/grooming" className="text-gray-600 hover:text-[#6bcbeb] transition-colors">
                    Grooming
                  </Link>
                </li>
                <li>
                  <Link href="/daycare" className="text-gray-600 hover:text-[#6bcbeb] transition-colors">
                    Daycare
                  </Link>
                </li>
                <li>
                  <Link href="/boarding" className="text-gray-600 hover:text-[#6bcbeb] transition-colors">
                    Boarding
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company links */}
            <div className="md:w-1/4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#6bcbeb] transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact information */}
            <div className="md:w-1/4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-[#6bcbeb] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>8875 US Hwy 12, Delano, MN, United States, Minnesota</span>
                </p>
                <p className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-[#6bcbeb] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+17639723647" className="hover:text-[#6bcbeb] transition-colors">(763) 972-3647</a>
                </p>
                <p className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-[#6bcbeb] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:Bubblesandbowsofdelano@gmail.com" className="hover:text-[#6bcbeb] transition-colors">Bubblesandbowsofdelano@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bubbles & Bows. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
