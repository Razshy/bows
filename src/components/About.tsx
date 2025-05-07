
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="max-w-[70rem] mx-auto px-4 md:px-6 py-16 bg-white" id="about">
      <div className="testimonial-card bg-[#f5f5f5] rounded-[20px] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
          {/* Left cell - Company introduction */}
          <div className="p-8 md:p-10 flex flex-col">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10C17.3726 10 12 15.3726 12 22C12 28.6274 17.3726 34 24 34C30.6274 34 36 28.6274 36 22C36 15.3726 30.6274 10 24 10Z" fill="#E5E5E5"/>
                <path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="#333"/>
                <path d="M30 20C31.1046 20 32 19.1046 32 18C32 16.8954 31.1046 16 30 16C28.8954 16 28 16.8954 28 18C28 19.1046 28.8954 20 30 20Z" fill="#333"/>
                <path d="M24 28C21.7909 28 20 26.2091 20 24H28C28 26.2091 26.2091 28 24 28Z" fill="#333"/>
                <path d="M36 22C36 28.6274 30.6274 34 24 34C17.3726 34 12 28.6274 12 22C12 15.3726 17.3726 10 24 10C30.6274 10 36 15.3726 36 22ZM24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32Z" fill="#333"/>
                <path d="M24 38C22.8954 38 22 37.1046 22 36V34C22 32.8954 22.8954 32 24 32C25.1046 32 26 32.8954 26 34V36C26 37.1046 25.1046 38 24 38Z" fill="#333"/>
                <path d="M18 38C16.8954 38 16 37.1046 16 36V34C16 32.8954 16.8954 32 18 32C19.1046 32 20 32.8954 20 34V36C20 37.1046 19.1046 38 18 38Z" fill="#333"/>
                <path d="M30 38C28.8954 38 28 37.1046 28 36V34C28 32.8954 28.8954 32 30 32C31.1046 32 32 32.8954 32 34V36C32 37.1046 31.1046 38 30 38Z" fill="#333"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight uppercase">
              WHAT WE CARE<br />THE MOST?
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">PUPP&apos;S</h3>
              <p className="text-gray-700 leading-relaxed">
                — has a unique pet service, starts with anatomic research, analysis, and provides precise growth, and health.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-rows-2 h-full divide-y divide-gray-200">
              {/* Top right - Testimonial header */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Clients Testimonial</p>
                  <h3 className="text-3xl md:text-4xl font-bold">01 -</h3>
                </div>
              </div>

              {/* Bottom section - Testimonial content and image */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
                {/* Testimonial content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#ff7e5f] flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 17L13.09 11.24L19 10.27L14.5 5.96L15.5 0L10 2.73L4.5 0L5.5 5.96L1 10.27L6.91 11.24L10 17Z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Thanks for your patience to take care my Pudding for the whole week. Great care taker. Will definitely want my Pudding to try home boarding again.
                    </p>
                    <div>
                      <h4 className="font-bold text-sm tracking-wider uppercase mb-1">SHANNON PAPPERT</h4>
                      <p className="text-gray-500 text-sm">Adventure Traveller</p>
                    </div>
                  </div>
                </div>

                {/* Dog image */}
                <div className="relative p-8 flex flex-col items-center justify-center">
                  <div className="relative w-full h-48 rounded-[16px] overflow-hidden">
                    <Image
                      src="/images/frenchie.jpg"
                      alt="French Bulldog"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-[16px]"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-[#ff5a5f] flex items-center justify-center cursor-pointer hover:bg-[#ff7e7f] transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-3 text-sm font-medium">Never miss a moment!</p>

                  <div className="absolute bottom-8 right-8">
                    <Link
                      href="#schedule"
                      className="inline-flex items-center bg-[#ffd166] text-black px-5 py-2 rounded-full font-medium hover:bg-[#ffda85] transition-all duration-300 shadow-sm"
                    >
                      <span>Book a Schedule</span>
                      <span className="ml-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="black"/>
                          <path d="M8.93 5.5H7.5V8.75L10.25 10.4L11 9.18L8.93 7.88V5.5Z" fill="black"/>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
