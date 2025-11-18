"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

const packages = [
  {
    name: 'Drop-In',
    price: '$30',
    duration: 'Full Day',
    description: 'For energetic pups who need to burn energy and socialize.',
    perks: [
      'Supervised group play',
      'Indoor & outdoor rotations',
      'Flexible drop-off/pick-up',
    ],
    image: '/daycare/Daycare.4.jpg',
  },
  {
    name: 'Half-Day',
    price: '$20',
    duration: '4 hours or less',
    description: 'Shorter playdate with exercise and new friends.',
    perks: [
      'Perfect for first-timers',
      'Quick energy burn',
      'Easy transition to full-day',
    ],
    image: '/daycare/Daycare.5.jpg',
  },
  {
    name: 'Unlimited',
    price: '$350',
    duration: 'Monthly',
    description: 'For social butterflies who love daycare life.',
    perks: [
      'Unlimited visits',
      'Priority scheduling',
      'Best value',
    ],
    image: '/daycare/Daycare.3.jpg',
  },
];

const gallery = [
  {
    src: '/daycare/Daycare.4.jpg',
    alt: 'Indoor play area',
    label: 'Indoor Play',
  },
  {
    src: '/daycare/Daycare.5.jpg',
    alt: 'Outdoor play yard',
    label: 'Outdoor Yard',
  },
  {
    src: '/daycare/Daycare.3.jpg',
    alt: 'Rest area',
    label: 'Chill Zone',
  },
];

export default function DaycarePage() {
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
                    DAYCARE
                  </h1>
                  
                  <p className="text-gray-800 text-base mb-8 font-medium leading-relaxed">
                    Safe, supervised play for social pups.<br />
                    Indoor and outdoor spaces with trained staff.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-4 mb-8">
                    <p className="font-bold text-gray-900 mb-2">Requirements</p>
                    <p className="text-sm text-gray-700">Spayed/neutered (6+ months), behavior assessment, current vaccinations</p>
                  </div>
                  
                  <Link
                    href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#b1f3ff] text-black px-8 py-3 rounded-[12px] font-medium hover:bg-[#ffda85] transition-all duration-300 inline-flex items-center border-2 border-gray-300"
                  >
                    <span>Book Daycare</span>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src="/daycare/Daycare.4.jpg"
                    alt="Daycare play area"
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                    priority
                    className="drop-shadow-xl rounded-[12px]"
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

        {/* Packages Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="md:w-1/2">
                <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  DAYCARE<br />PACKAGES
                </h2>
              </div>
              <div className="md:w-1/2 text-right">
                <p className="text-gray-700 text-lg">
                  Flexible options for every schedule
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-white rounded-[12px] border-2 border-gray-200 overflow-hidden hover:border-[#6bcbeb] transition-all">
                  <div className="relative h-48 w-full">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900">{pkg.name}</h3>
                        <p className="text-sm text-gray-600">{pkg.duration}</p>
                      </div>
                      <p className="text-2xl font-black text-gray-900">{pkg.price}</p>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">{pkg.description}</p>
                    <ul className="space-y-1 text-gray-700 text-sm mb-6">
                      {pkg.perks.map((perk) => (
                        <li key={perk}>{perk}</li>
                      ))}
                    </ul>
                    <Link
                      href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-900 text-white px-6 py-3 rounded-[12px] font-bold text-center hover:bg-gray-800 transition-all"
                    >
                      Book {pkg.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <div className="md:w-1/2">
                <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  PLAY SPACES
                </h2>
              </div>
              <div className="md:w-1/2 text-right">
                <p className="text-gray-700 text-lg">
                  Indoor and outdoor areas for play and rest
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.src} className="group rounded-[12px] overflow-hidden border-2 border-gray-200 bg-white hover:border-[#6bcbeb] transition-all">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <p className="font-bold text-lg text-gray-900">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="bg-[#6bcbeb] rounded-[12px] p-8 md:p-12 text-white text-center">
              <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">READY TO PLAY?</h3>
              <p className="mb-8 text-white text-lg max-w-2xl mx-auto">
                Book online or call us to schedule your pup&apos;s first day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="tel:+17639723647" className="text-white hover:text-white/90 transition-colors">
                  <span className="font-semibold text-lg">(763) 972-3647</span>
                </a>
                <span className="hidden sm:block text-white/50">|</span>
                <a href="mailto:bnbdelano@gmail.com" className="text-white hover:text-white/90 transition-colors">
                  <span className="font-semibold">bnbdelano@gmail.com</span>
                </a>
              </div>
              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#6bcbeb] px-10 py-4 rounded-[12px] font-bold hover:bg-gray-100 transition-all duration-300 border-2 border-white"
              >
                Book Daycare
              </Link>
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

