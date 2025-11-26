"use client";

import Image from 'next/image';

export default function BoardingCollection() {
    return (
        <section className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12 py-16 bg-white" id="boarding-collection">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 text-center md:text-left">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            WE BOARD
                        </h2>
                    </div>
                    <div className="md:w-1/3 md:text-right">
                        <p className="text-gray-700 text-lg">
                            Climate-controlled suites & private patios.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Item */}
                    <div className="pet-card group flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/boarding/room1.png"
                                alt="Premium Suite"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Premium Suite</h3>
                    </div>

                    {/* Second Item */}
                    <div className="pet-card group flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/boarding/room2.png"
                                alt="Standard Room"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Standard Room</h3>
                    </div>

                    {/* Third Item */}
                    <div className="pet-card group flex flex-col items-center">
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[12px] border-2 border-gray-200 group-hover:border-[#6bcbeb] transition-all">
                            <Image
                                src="/boarding/stall.png"
                                alt="Pup Patio"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-center">Pup Patio</h3>
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
