import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex items-center pt-40 pb-32 overflow-hidden mt-0 backdrop-blur-[2px] bg-white/10">

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
            {/* Dog image */}
            <div className="w-full h-[400px] md:h-[500px] relative z-10">
              <Image
                src="/images/pups.png"
                alt="Happy golden retriever"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
