import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center pt-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 flex flex-col md:flex-row items-center py-16">
        {/* Left side content */}
        <div className="md:w-[45%] mb-16 md:mb-0 relative">
          {/* Small blue circle background for hamster */}
          <div className="absolute right-0 top-0 w-24 h-24 bg-[#6bcbeb] rounded-full -translate-y-1/2 translate-x-1/4 z-0"></div>

          <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-2 z-10 relative">
            YOUR<br />
            PUPP&apos;S BEST<br />
            FRIEND
          </h1>

          {/* Red circle accent */}
          <div className="absolute -right-4 bottom-32 w-16 h-16 bg-[#ff3366] rounded-full z-0"></div>

          <p className="text-gray-700 text-base mb-8 max-w-md">
            Training, grooming to nutrition & exercise, there&apos;s<br />
            caring worth often becomes the family.
          </p>

          <Link
            href="#schedule"
            className="bg-[#f8e16c] text-black px-6 py-3 rounded-full font-medium hover:bg-[#f5d742] transition-colors inline-flex items-center border border-[#e6d060] shadow-sm"
          >
            <span>Book a Schedule</span>
            <span className="ml-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right side image with blue background */}
        <div className="md:w-[55%] relative">
          {/* Blue background shape */}
          <div className="absolute inset-0 bg-[#6bcbeb] rounded-3xl -right-10 -top-10 -bottom-10"></div>

          {/* Dog image */}
          <div className="w-full h-[400px] md:h-[500px] relative z-10">
            <Image
              src="/images/happygold.png"
              alt="Dog with a chew toy"
              fill
              style={{ objectFit: 'contain' }}
              priority
              className="drop-shadow-xl"
            />
          </div>

          

        </div>
      </div>
    </section>
  );
}
