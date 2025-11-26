"use client";

import Image from 'next/image';

export default function GroomedCollection() {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 py-16 bg-white" id="collection">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 text-center md:text-left">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              WE GROOM
            </h2>
          </div>
          <div className="md:w-1/3 md:text-right">
            <p className="text-gray-700 text-lg">
              We have 22 years of grooming experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src="/groom/g1.jpg"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold uppercase text-center">Golden Retriever</h3>
          </div>

          {/* Second Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src="/groom/g2.jpg"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold uppercase text-center">Goldendoodle</h3>
          </div>

          {/* Third Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src="/groom/g3.jpg"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold uppercase text-center">Bichon Frise</h3>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pet-card {
          transition: transform 0.3s ease;
        }

        .pet-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
