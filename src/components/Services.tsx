
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="services">
      <div className="container mx-auto">
        {/* Top info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/3 relative">
              {/* You'll replace this with an actual Image component once you have the dog image */}
              <div className="w-full h-full bg-gray-200"></div>
            </div>
            <div className="w-2/3 p-6">
              <h3 className="text-lg font-bold mb-2">LEARN HOW TO CARE FOR PUPPY&apos;S</h3>
              <Link href="#" className="text-teal-800 font-medium hover:underline">
                Read Article
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/3 relative">
              {/* You'll replace this with an actual Image component once you have the product image */}
              <div className="w-full h-full bg-blue-200"></div>
            </div>
            <div className="w-2/3 p-6">
              <h3 className="text-lg font-bold mb-2">BASIC NUTRITION MEAL BALL</h3>
              <Link href="#" className="text-teal-800 font-medium hover:underline">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        
        {/* Pet collection section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">WELL GROOMED PET COLLECTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-300 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 relative">
                {/* You'll replace this with an actual Image component */}
                <div className="w-full h-full bg-orange-200 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold">AFRICAN MACAW</h3>
            </div>
            
            <div className="bg-yellow-300 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 relative">
                {/* You'll replace this with an actual Image component */}
                <div className="w-full h-full bg-yellow-200 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold">SPANISH BULLDOG</h3>
            </div>
            
            <div className="bg-blue-300 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-40 mb-4 relative">
                {/* You'll replace this with an actual Image component */}
                <div className="w-full h-full bg-blue-200 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold">SPANIEL DOG</h3>
            </div>
          </div>
        </div>
        
        {/* Best food section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-300 rounded-full p-6 flex items-center justify-center">
            <div className="w-full h-64 relative">
              {/* You'll replace this with an actual Image component */}
              <div className="w-full h-full bg-blue-200 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">THE BEST FOOD FOR 🍑 YOUR FURRY FRIEND</h2>
            <p className="text-gray-700 mb-6">
              To provide your pet balanced and healthy life, to reduce sickness.
            </p>
            <Link href="#" className="inline-flex items-center bg-white border-2 border-gray-300 rounded-full px-6 py-2 text-gray-800 font-medium">
              Order Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Food packages */}
        <div className="bg-yellow-300 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-500 rounded-lg p-4 text-white text-center">
                <h3 className="font-bold">GREEN & CLEAN</h3>
              </div>
              <div className="bg-red-500 rounded-lg p-4 text-white text-center">
                <h3 className="font-bold">BEEF MIX</h3>
              </div>
              <div className="bg-blue-500 rounded-lg p-4 text-white text-center">
                <h3 className="font-bold">DENTAL & FRESH</h3>
              </div>
            </div>
            
            <div className="col-span-1 bg-white rounded-lg p-4">
              <h3 className="font-bold mb-2">GET OUR ASSISTANCE TO BENEFIT YOUR PET</h3>
              <p className="text-sm text-gray-600">
                Pick up tips to keep them safe, and feed them a good amount of antioxidants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
