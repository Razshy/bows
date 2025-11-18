"use client";

import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
        <div className="bg-[#6bcbeb] rounded-[12px] p-10 md:p-12 shadow-sm border border-[#5bb8d8]">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Book Your Pet&apos;s Visit Today
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Professional grooming, luxurious boarding, and fun daycare services for your beloved pets
            </p>
            <Link
              href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#6bcbeb] px-8 py-3 rounded-[12px] font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center border-2 border-white shadow-md"
            >
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
