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
        <GroomedCollection />
        <BoardingCollection />
        <DaycareCollection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
