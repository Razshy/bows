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

          {/* Certification badge */}
          <div className="absolute bottom-10 right-0 w-20 h-20 bg-[#f8e16c] rounded-full flex items-center justify-center p-1 border-2 border-[#e6d060]">
            <div className="text-[8px] font-bold text-center flex flex-col items-center justify-center w-full h-full rounded-full border border-black">
              <span>HEALTHY AND</span>
              <div className="w-4 h-4 my-1">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,17.5C10.2,17.5 8.8,16.1 8.8,14.3C8.8,12.5 10.2,11.1 12,11.1C13.8,11.1 15.2,12.5 15.2,14.3C15.2,16.1 13.8,17.5 12,17.5M12,9.1C9.08,9.1 6.8,11.38 6.8,14.3C6.8,17.22 9.08,19.5 12,19.5C14.92,19.5 17.2,17.22 17.2,14.3C17.2,11.38 14.92,9.1 12,9.1M12,4.8C13.1,4.8 14,5.7 14,6.8C14,7.9 13.1,8.8 12,8.8C10.9,8.8 10,7.9 10,6.8C10,5.7 10.9,4.8 12,4.8M12,2.8C9.79,2.8 8,4.59 8,6.8C8,9.01 9.79,10.8 12,10.8C14.21,10.8 16,9.01 16,6.8C16,4.59 14.21,2.8 12,2.8Z" />
                </svg>
              </div>
              <span>TASTY TREATS</span>
            </div>
          </div>

          {/* Product info card */}
          <div className="absolute bottom-0 left-1/4 bg-[#ff7846] text-white p-3 rounded-md w-48">
            <div className="border-2 border-dashed border-white p-2 rounded">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C9.8,2 8,3.8 8,6C8,8.2 9.8,10 12,10C14.2,10 16,8.2 16,6C16,3.8 14.2,2 12,2M4,8V14C4,16.2 5.8,18 8,18H9V20H15V18H16C18.2,18 20,16.2 20,14V8H4Z" />
                </svg>
                <h3 className="font-bold text-sm uppercase">FISH CUTLET</h3>
              </div>
              <div className="text-xs">
                <p className="mb-1">Ingredient: Pumpkin,</p>
                <p>Meat, Fish Cutlet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
