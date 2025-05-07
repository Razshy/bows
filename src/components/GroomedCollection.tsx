"use client";

import Image from 'next/image';

export default function GroomedCollection() {
  return (
    <section className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 py-16 bg-white" id="collection">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 md:mb-0 leading-tight tracking-tight">
            WELL GROOMED<br />PET COLLECTION
          </h2>
          <div className="max-w-xs">
            <p className="text-gray-700">
              We have huge collection of domestic animal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/groom/groom.png"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center uppercase">African Macaw</h3>
          </div>

          {/* Second Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/groom/groom-1.png"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center uppercase">Spanish Bulldog</h3>
          </div>

          {/* Third Pet */}
          <div className="pet-card flex flex-col items-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/groom/groom-2.png"
                alt="Groomed Pet"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded-[12px]"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-center uppercase">Spaniel Dog</h3>
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
