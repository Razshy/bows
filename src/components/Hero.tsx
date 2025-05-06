import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-sky-400 min-h-screen flex items-center pt-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full relative">
          {/* Background pattern elements will go here */}
          <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full border-2 border-gray-200"></div>
          <div className="absolute top-[40%] right-[15%] w-20 h-20 rounded-full border-2 border-gray-200"></div>
          <div className="absolute bottom-[20%] left-[20%] w-24 h-24 rounded-full border-2 border-gray-200"></div>
          <div className="absolute top-[60%] right-[25%] w-16 h-16 rounded-full border-2 border-gray-200"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <h2 className="text-white text-xl font-medium mb-4">WE PROVIDE</h2>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Durable<br />
            Dog Chew<br />
            Toys
          </h1>
          <p className="text-white text-lg mb-8 max-w-md">
            Premium pet grooming and boarding services for your furry friends in Delano.
          </p>
          <Link href="#services" className="bg-teal-800 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors inline-block font-medium">
            Shop Now
          </Link>
        </div>

        <div className="md:w-1/2 relative">
          {/* Image placeholder - you'll add the actual image later */}
          <div className="w-full h-[400px] md:h-[500px] relative">
            <div className="w-full h-full bg-gray-100 rounded-lg relative overflow-hidden">
              {/* You'll replace this with an actual Image component once you have the dog image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Dog image will go here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
