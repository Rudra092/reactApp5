import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
export default function AppTestimonial(){
    const testimonials = [
        {
          text: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
          name: "Judith Black",
          role: "CEO of Workcation",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          text: "“Amazing experience! This service has completely changed the way we work, and we couldn't be happier.”",
          name: "John Doe",
          role: "Founder of StartupX",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          text: "“I highly recommend this product. The quality and attention to detail are outstanding.”",
          name: "Emily White",
          role: "Marketing Manager",
          image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
      ];
    
      const [index, setIndex] = useState(0);
    
      // Auto slide every 4 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          nextTestimonial();
        }, 4000);
        return () => clearInterval(interval);
      }, [index]);
    
      const prevTestimonial = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      };
    
      const nextTestimonial = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      };
    return(
        <section className="max-w-4xl mx-auto mt-6 mb-6 pt-[30px] pb-[30px] shadow-lg rounded-lg relative isolate overflow-hidden bg-white px-6 py-24 lg:px-8">
      {/* Background Styling */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
    {/* Heading Section */}
    <div className="text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          We appreciate every feedback and strive to provide better services.
        </p>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        {/* Sliding Testimonials */}
        <div className="relative mt-10 flex items-center justify-center">
          {/* Left Arrow */}
          <button onClick={prevTestimonial} className="absolute left-0 md:left-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Wrapper */}
          <div className="w-full max-w-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  <p>{testimonials[index].text}</p>
                </blockquote>
                <figcaption className="mt-6">
                  <img
                    alt={testimonials[index].name}
                    src={testimonials[index].image}
                    className="mx-auto size-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{testimonials[index].name}</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">{testimonials[index].role}</div>
                  </div>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button onClick={nextTestimonial} className="absolute right-0 md:right-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
    )
}