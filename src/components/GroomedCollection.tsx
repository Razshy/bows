"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function GroomedCollection() {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 py-16 bg-white" id="collection">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 text-center md:text-left">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              WE GROOM
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-medium">PROFESSIONAL GROOMING SERVICES</p>
          </div>
          <div className="md:w-1/2 md:text-right">
            <p className="text-gray-700 text-lg mb-4">
              Expert grooming with a gentle touch. Everything from a nail trim to a full service spa treatment and everything in between.
            </p>
            <Link
              href="/grooming"
              className="inline-block bg-[#6bcbeb] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5bb8d8] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">

          {/* Second Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/groomedd-min.png"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Third Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/groomm-min.png"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Fourth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_0120.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Fifth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_0140.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Sixth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_1790.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Seventh Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_2219.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Eighth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_2779.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Ninth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_2826.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Tenth Pet */}
          <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-[calc((100%-4rem)/3)] snap-center">
            <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
              <Image
                src="/groom/IMG_3007.JPG"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pet-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pet-card:hover {
          transform: translateY(-8px);
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}
