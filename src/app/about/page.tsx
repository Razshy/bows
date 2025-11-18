import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = dynamic(() => import('../../components/Navbar'));
const Footer = dynamic(() => import('../../components/Footer'));

const highlights = [
  {
    title: 'Family Owned & Operated',
    description: 'Proudly serving Delano with 21 years of hands-on pet service experience.',
  },
  {
    title: 'All-In-One Care',
    description: 'Five-star grooming, luxurious boarding, and action-packed daycare under one roof.',
  },
  {
    title: 'Safety First',
    description: 'Clean, sanitized suites, secure play yards, and a knowledgeable team you can trust.',
  },
];

const values = [
  {
    name: 'Compassion',
    detail: 'We treat every tail wag as if it belonged to our own pets—gentle handling and individualized attention are non-negotiable.',
  },
  {
    name: 'Expertise',
    detail: 'Our experienced groomers and caregivers stay current on best practices for coat care, enrichment, and animal behavior.',
  },
  {
    name: 'Community',
    detail: 'We’re neighbors first and providers second, partnering with local families to keep Delano’s pets happy and healthy.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f7fdff]">
      <main className="min-h-screen relative">
        <Navbar />

        <section className="pt-28 pb-16 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center px-4 py-1 bg-[#e8fbff] rounded-full text-sm font-semibold text-[#008db1] w-fit border border-[#aeeaf6]">
                About Bubbles &amp; Bows
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                WE ARE NOW OPEN!
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you looking for professional pet services in Delano? Do you need exceptional pet grooming or boarding
                options for your best companion? Bubbles &amp; Bows Pet Services of Delano offers five star pet grooming,
                luxurious boarding accommodations, and action-packed daycare for your pets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bubbles and Bows is a family owned business that boasts 21 years of pet service experience. We believe in
                providing quality care for your animal with a knowledgeable staff, a clean and safe facility, and a
                commitment to your animal’s well-being and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  Book A Visit
                </Link>
                <Link
                  href="tel:+17639723647"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Call (763) 972-3647
                </Link>
              </div>
              <div className="rounded-3xl px-6 py-4 border border-[#aeeaf6] bg-[#f7fdff] flex flex-wrap gap-3 items-center text-sm md:text-base">
                <span className="font-semibold text-gray-900">Grooming · Boarding · Daycare</span>
                <span className="hidden md:inline-block text-gray-400">|</span>
                <span className="text-[#008db1] font-semibold">CALL (763) 972-3647 TO SCHEDULE</span>
              </div>
            </div>
            <div className="rounded-[32px] overflow-hidden border border-[#d8f6ff] bg-white shadow-lg">
              <Image
                src="/images/pups.png"
                alt="Happy dogs at Bubbles & Bows"
                width={960}
                height={960}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="bg-[#f5fdff] border border-[#d8f6ff] rounded-[28px] p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-[#f7fdff]">
          <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-[#008db1] uppercase tracking-wide">Why Families Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built On Trust, Tailored For Pets
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From day one, we set out to create a space where pet parents could feel confident leaving their
                companions—whether for a grooming glow-up, an overnight retreat, or a full day of daycare adventures.
                Twenty-one years later, our passion is stronger than ever.
              </p>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.name} className="bg-white rounded-2xl border border-gray-100 shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{value.name}</h3>
                    <p className="text-gray-600 mt-2">{value.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[36px] border border-gray-100 shadow-xl p-10 space-y-6">
              <p className="text-sm font-semibold text-[#008db1] uppercase tracking-wide">Visit Us</p>
              <h3 className="text-3xl font-bold text-gray-900">Plan Your First Appointment</h3>
              <p className="text-gray-700">
                We’re thrilled to welcome new furry friends to the Bubbles &amp; Bows family. Let’s find a service plan
                that fits your pet’s needs and your schedule.
              </p>
              <div className="space-y-4">
                <Link
                  href="tel:+17639723647"
                  className="flex items-center gap-3 text-gray-900 hover:text-[#008db1] transition-colors font-semibold"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e5fbff] text-[#008db1] font-bold">
                    📞
                  </span>
                  (763) 972-3647
                </Link>
                <Link
                  href="mailto:bnbdelano@gmail.com"
                  className="flex items-center gap-3 text-gray-900 hover:text-[#008db1] transition-colors font-semibold"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e5fbff] text-[#008db1] font-bold">
                    @
                  </span>
                  bnbdelano@gmail.com
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-gray-900 hover:text-[#008db1] transition-colors font-semibold"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e5fbff] text-[#008db1] font-bold">
                    🐾
                  </span>
                  Schedule a meet &amp; greet tour
                </Link>
              </div>
              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

