import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = dynamic(() => import('../components/Navbar'));
const Footer = dynamic(() => import('../components/Footer'));
const Hero = dynamic(() => import('../components/Hero'));

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

      <Navbar />
      <Hero />

      <main>
        {/* What We Do Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-12 h-12 opacity-20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                What We Do?
              </h2>
              <div className="w-24 h-1 bg-[#6bcbeb] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Daycare Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/daycare/full.png"
                      alt="Daycare"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-gray-900">Daycare</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                  Your pup enjoys a day of fun, frolic, and play. We provide tons of attention and care while you&apos;re gone for the day.
                </p>
                <div className="text-center">
                  <Link
                    href="/daycare"
                    className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>

              {/* Grooming Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/groom/groo.png"
                      alt="Grooming"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-gray-900">Grooming</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                  Your pup is given professional show-ready grooming. We outline the details so you have no unexpected surprises.
                </p>
                <div className="text-center">
                  <Link
                    href="/grooming"
                    className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>

              {/* Boarding Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/boarding/room1.png"
                      alt="Boarding"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-center mb-4 text-gray-900">Boarding</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                  Your pup enjoys a tailored overnight visit, allowing for a variety of suites and activities perfect for your pet&apos;s specific needs.
                </p>
                <div className="text-center">
                  <Link
                    href="/boarding"
                    className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-2 rounded-md font-bold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20  from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 md:order-1">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/image.png"
                    alt="Bubbles and Bows Team"
                    width={600}
                    height={600}
                    className="object-cover w-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 text-center md:text-left">
                  Welcome to Our Family
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  We&apos;re a family-owned pet grooming, boarding, and daycare here in Delano. We&apos;ve been doing this for over 22 years now, and we still love it just as much as when we started.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                  We&apos;re pet owners too, so we get how hard it is to find someone you really trust with your furry family. That&apos;s actually why we started this place. We wanted to create somewhere that treats every dog the way we&apos;d want our own pets treated. Your pup isn&apos;t just another appointment to us, they&apos;re part of the family.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We&apos;d love to meet you and your dog! Feel free to stop by anytime and we&apos;ll show you around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hours Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
              Hours
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Hours info */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black mb-6 text-gray-900">Drop off & pick up</h3>

                <div className="mb-6">
                  <p className="text-lg font-bold text-gray-800 mb-2">Monday - Friday</p>
                  <p className="text-gray-600 text-base">8:00am - 11:00am</p>
                  <p className="text-gray-600 text-base">3:00pm - 6:00pm</p>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-bold text-gray-800 mb-2">Saturday & Sunday</p>
                  <p className="text-gray-600 text-base">9:00am - 11:00am</p>
                  <p className="text-gray-600 text-base">3:00pm - 5:00pm</p>
                </div>

                <div>
                  <p className="text-lg font-bold text-gray-800 mb-2">Address</p>
                  <p className="text-gray-600 text-base">8875 US Hwy 12</p>
                  <p className="text-gray-600 text-base">Delano, MN 55328</p>
                </div>
              </div>

              {/* Right side - Dog image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/IMG_1956.JPG"
                    alt="Happy dog at Bubbles and Bows"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                Happy Pups Gallery
              </h2>
              <p className="text-lg text-gray-600">
                See some of the adorable pets we&apos;ve had the pleasure of caring for
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Row 1 */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/groo.png"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/groomm.png"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_0120.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_0140.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 2 */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_1790.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_2219.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_2779.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_2826.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 3 */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_3007.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_0574.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_1766.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/groom/IMG_2640.JPG"
                  alt="Happy groomed dog"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Row 4 */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/play/indoor.JPG"
                  alt="Dogs playing indoors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/play/outdoors.JPG"
                  alt="Dogs playing outdoors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/play/rest.JPG"
                  alt="Dogs resting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src="/boarding/room1.png"
                  alt="Boarding room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Staff & Facilities */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/groom/IMG_2219.JPG"
                      alt="Staff and Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Caring & Experienced Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team genuinely loves what we do. We&apos;re all pet owners ourselves, and we treat every dog like they&apos;re part of our own family.
                </p>
              </div>

              {/* Tailored Stay */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/groom/IMG_0140.JPG"
                      alt="Tailored Stay"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Every Pet is Unique</h3>
                <p className="text-gray-600 leading-relaxed">
                  We know your dog has their own personality and preferences. Just let us know what makes them happy, and we&apos;ll make sure they feel right at home.
                </p>
              </div>

              {/* Never A Dull Moment */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/play/outdoors.JPG"
                      alt="Never A Dull Moment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Fun & Comfort</h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether your pup loves to play or prefers quiet time, we&apos;ve got them covered. Active dogs get plenty of playtime, while our calmer friends enjoy peaceful rest areas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Affordable */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/groom/IMG_1790.JPG"
                      alt="Affordable"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Quality Care, Fair Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe great pet care shouldn&apos;t cost a fortune. You&apos;ll get the same love and attention we&apos;d give our own pets, at prices that won&apos;t break the bank.
                </p>
              </div>

              {/* Healthy And Happy */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/groom/IMG_2826.JPG"
                      alt="Healthy And Happy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">Clean & Safe Environment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We keep everything spotless and well-maintained. Your pet&apos;s health and safety are our top priorities, so you can have complete peace of mind.
                </p>
              </div>

              {/* Because We Understand */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/groom/IMG_3007.JPG"
                      alt="Because We Understand"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">We&apos;ve Been in Your Shoes</h3>
                <p className="text-gray-600 leading-relaxed">
                  We started Bubbles and Bows after our own frustrating experiences finding good pet care. We wanted to create the kind of place we&apos;d trust with our own furry family members.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#6bcbeb] to-[#5ab8d8] relative overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 border-4 border-dashed border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-dashed border-white/30 rounded-full"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready To Give Your Pet The Best Care?
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Book your pet&apos;s stay with us today and experience the Bubbles and Bows difference
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#6bcbeb] px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                BOOK NOW
              </Link>
              <a
                href="tel:7639723647"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#6bcbeb] transition-colors"
              >
                CALL US
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
