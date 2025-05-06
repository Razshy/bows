import dynamic from 'next/dynamic';

// Import components with dynamic imports for better performance
const Navbar = dynamic(() => import('../components/Navbar'));
const Hero = dynamic(() => import('../components/Hero'));
const Services = dynamic(() => import('../components/Services'));
const About = dynamic(() => import('../components/About'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
