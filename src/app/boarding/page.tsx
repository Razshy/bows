"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

const requirements = ['Rabies', 'Distemper/Parvo', 'Bordetella'];

const packages = [
  {
    name: 'Standard Room',
    price: '$42',
    size: '4x5 suite',
    description: 'For calm, older pups who prefer a quiet routine.',
    perks: [
      '4-6+ potty breaks daily',
      'Meals on their schedule',
      'Soothing music',
      'Elevated bed included',
    ],
  },
  {
    name: 'Premium Suite',
    price: '$55',
    size: '4x6 to 8x12 suites',
    description: 'Spacious suites with private patios and play park access.',
    perks: [
      'Supervised play sessions',
      'Private outdoor patio',
      'For social, energetic pups',
      'Temperament test required',
    ],
  },
];

const roomImages = [
  {
    src: '/boarding/room1.png',
    alt: 'Premium suite interior',
    label: 'Premium Suite',
  },
  {
    src: '/boarding/room2.png',
    alt: 'Standard room with cozy bedding',
    label: 'Standard Room',
  },
  {
    src: '/boarding/stall.png',
    alt: 'Private outdoor patio',
    label: 'Pup Patio',
  },
];

export default function BoardingPage() {
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
                PET<br />
                BOARDING
              </h1>

              <p className="text-gray-800 text-base mb-8 font-medium leading-relaxed">
                A vacation for them, peace of mind for you.<br />
                Climate-controlled suites with love and care.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Check-in</p>
                  <p className="text-sm font-bold text-gray-900">Business hours</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Check-out</p>
                  <p className="text-sm font-bold text-gray-900">10:00 AM</p>
                </div>
              </div>

              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b1f3ff] text-black px-8 py-3 rounded-[12px] font-medium hover:bg-[#ffda85] transition-all duration-300 inline-flex items-center border-2 border-gray-300"
              >
                <span>Book Their Stay</span>
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

        {/* Room Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  OUR SUITES
                </h2>
              </div>
              <div className="md:w-1/2 md:text-right">
                <p className="text-gray-700 text-lg">
                  Climate-controlled rooms, private patios, and play yards
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roomImages.map((room) => (
                <div key={room.src} className="group rounded-[12px] overflow-hidden border-2 border-gray-200 bg-white hover:border-[#6bcbeb] transition-all">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={room.src}
                      alt={room.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <p className="font-bold text-lg text-gray-900">{room.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
              <div className="md:w-1/2 text-center md:text-left w-full">
                <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
                  BOARDING<br />PACKAGES
                </h2>
                <p className="text-gray-700 text-lg">
                  Pick the suite that fits your pup&apos;s personality
                </p>
              </div>
              <div className="w-full md:w-auto">
                <p className="font-bold text-gray-900 mb-3">Required Vaccinations</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {requirements.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-[12px] border-2 border-gray-200 p-8 hover:border-[#6bcbeb] transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{pkg.size}</p>
                      <h3 className="text-3xl font-black text-gray-900">{pkg.name}</h3>
                    </div>
                    <p className="text-3xl font-black text-gray-900">{pkg.price}<span className="text-base font-normal text-gray-600">/night</span></p>
                  </div>
                  <p className="text-gray-700 mb-6">{pkg.description}</p>
                  <ul className="space-y-2 text-gray-700 mb-8">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="text-sm">{perk}</li>
                    ))}
                  </ul>
                  <Link
                    href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-900 text-white px-6 py-3 rounded-[12px] font-bold text-center hover:bg-gray-800 transition-all"
                  >
                    Reserve {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Policies Card */}
              <div className="bg-white border-2 border-gray-200 rounded-[12px] p-8 md:p-10 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                  THE BASICS
                </h2>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed inline-block text-left">
                  <p>Check in during business hours</p>
                  <p>Check out by 10 AM (after = extra day)</p>
                  <p>Temperament tests for group play</p>
                  <p>Daily updates on request</p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#6bcbeb] rounded-[12px] p-8 md:p-10 text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">BOOK NOW</h3>
                <p className="mb-8 text-white text-lg leading-relaxed">
                  Questions? Want a tour? Ready to book? Get in touch.
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
                  Book Their Stay
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

