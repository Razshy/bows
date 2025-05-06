
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="about">
      <div className="container mx-auto">
        {/* How we serve section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">HOW WE SERVE OUR PET PARENTS</h2>
          <p className="text-gray-700 mb-8">
            Making pet owning simpler for you. Our priority, well-equipped services is created with love.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {/* Services list */}
            <div className="col-span-2">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium">Adoption</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3"></span>
                  <span className="font-medium">Fostering</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3"></span>
                  <span className="font-medium">Vaccination</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3"></span>
                  <span className="font-medium">Grooming</span>
                </li>
              </ul>
            </div>
            
            {/* Animal categories */}
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center">
                <span className="font-bold mb-2">BIRD</span>
                <div className="w-full h-16 rounded-full bg-yellow-200 relative">
                  {/* Bird image placeholder */}
                </div>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-3 flex flex-col items-center">
                <span className="font-bold mb-2">CAT</span>
                <div className="w-full h-16 rounded-full bg-blue-200 relative">
                  {/* Cat image placeholder */}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 flex flex-col items-center">
                <span className="font-bold mb-2">DOGS</span>
                <div className="w-full h-16 rounded-full bg-gray-200 relative">
                  {/* Dog image placeholder */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What we care about section */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">WHAT WE CARE THE MOST?</h3>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-6 relative">
                <h4 className="text-lg text-gray-500 mb-2">Client&apos;s Testimonial</h4>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">01 —</div>
                    <div className="flex mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Thanks to your patient to take care my Pudding in the whole week. Good job, team. We definitely will try Pooking in you in home boarding again.
                    </p>
                    <div className="font-bold">SHANNON PUPPERT</div>
                    <div className="text-sm text-gray-500">Adventure Traveller</div>
                  </div>
                  
                  <div className="ml-6">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg relative">
                      {/* Dog image placeholder */}
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6">
                  <Link href="#" className="inline-flex items-center bg-white border-2 border-gray-300 rounded-full px-4 py-1 text-gray-800 font-medium">
                    Book a Schedule
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
