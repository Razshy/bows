import dynamic from 'next/dynamic';

// Import components with dynamic imports for better performance
const Navbar = dynamic(() => import('../components/Navbar'));
const Hero = dynamic(() => import('../components/Hero'));
const GroomedCollection = dynamic(() => import('../components/GroomedCollection'));
const BoardingCollection = dynamic(() => import('../components/BoardingCollection'));
const DaycareCollection = dynamic(() => import('../components/DaycareCollection'));
const CtaSection = dynamic(() => import('../components/CtaSection'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <div className="relative">
      {/* Background that extends behind navbar - only for the top section */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[#b1f3ff] -z-10">
        {/* Pet-themed background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-[url('/images/background.png')] bg-repeat bg-contain  opacity-25"></div>
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
      </div>

      <main className="min-h-screen relative">
        <Navbar />
        <Hero />
        {/* Quick Info Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  8875 US Hwy 12<br />
                  Delano, MN
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Contact</h3>
                <p className="text-gray-600 leading-relaxed">
                  <a href="tel:+17639723647" className="hover:text-[#6bcbeb] transition-colors">(763) 972-3647</a><br />
                  <a href="mailto:Bubblesandbowsofdelano@gmail.com" className="hover:text-[#6bcbeb] transition-colors text-sm">Bubblesandbowsofdelano@gmail.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  Family Owned<br />
                  22 Years in Business
                </p>
              </div>
            </div>
          </div>
        </section>

        <GroomedCollection />
        <BoardingCollection />
        <DaycareCollection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
