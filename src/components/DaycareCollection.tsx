"use client";

import Image from 'next/image';

export default function DaycareCollection() {
    return (
        <section className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 py-16 bg-white" id="daycare-collection">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 text-center md:text-left">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            WE PLAY
                        </h2>
                    </div>
                    <div className="md:w-1/3 md:text-right">
                        <p className="text-gray-700 text-lg">
                            Safe, supervised fun for every pup.
                        </p>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    {/* First Item */}
                    <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-0 snap-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/daycare/full.JPG"
                                alt="Group Play"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Group Play</h3>
                    </div>

                    {/* Second Item */}
                    <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-0 snap-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/daycare/half.png"
                                alt="Small Dogs"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Small Dogs</h3>
                    </div>

                    {/* Third Item */}
                    <div className="pet-card group flex flex-col items-center min-w-[85%] md:min-w-0 snap-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/daycare/unlimited.JPG"
                                alt="Outdoor Fun"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Outdoor Fun</h3>
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
