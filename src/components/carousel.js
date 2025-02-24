import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import image from "../assets/image.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
const slides = [
    { image: image, title: "Welcome to Our Website", description: "We provide the best services for your needs." },
    { image: image1, title: "Explore Our Features", description: "Discover amazing features designed just for you." },
    { image: image2, title: "Join Our Community", description: "Be part of a growing network of professionals." },
  ];
export default function AppCarousel(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Function to move to the next slide
  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 300); // Wait for fade-out before changing
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsFading(false);
    }, 300);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Runs whenever currentIndex changes
    return(
        <div className="relative w-full max-w-2xl mx-auto">
        {/* Image Display with Smooth Fade Transition */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className={`absolute inset-0 w-full h-64 object-cover transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
  
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 p-4 text-center">
            <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
            <p className="text-sm mt-2">{slides[currentIndex].description}</p>
          </div>
        </div>
  
        {/* Left Button */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
  
        {/* Right Button */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
  
        {/* Dots Navigation */}
        <div className="flex justify-center mt-2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    )
}