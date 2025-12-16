"use client";

import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-12">
        <div className="bg-[#6bcbeb] rounded-lg p-10 md:p-14 shadow-sm">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
              Book Your Pet&apos;s Visit Today
            </h2>
            <p className="text-white text-base mb-8 max-w-2xl mx-auto opacity-95">
              Professional grooming, luxurious boarding, and fun daycare services for your beloved pets
            </p>
            <Link
              href="https://bubblesandbows.mykcapp.com/CLIENTLOGIN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#6bcbeb] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center"
            >
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
