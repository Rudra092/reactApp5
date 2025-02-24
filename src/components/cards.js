import image from "../assets/image.jpg";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
export default function AppCards(){
    const cards = [
        {
          title: "Exploring",
          description: "Optimized for speed and efficiency.",
          image: image,
        },
        {
          title: "Matching",
          description: "Built with security and stability in mind.",
          image: image1,
        },
        {
          title: "Arranging",
          description: "Designed with an intuitive user experience.",
          image: image2,
        },
        {
          title: "Treatment",
          description: "Easily scalable to meet your growing needs.",
          image: image3,
        },
      ];
    return(
<div className="container mx-auto p-6">
    <div className="flex items-center justify-center pb-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">The Simplest Process in Finding<br/>Healthcare Abroad</h1>
        <p className="text-gray-600 mt-2">We'll help you map out your medical tourism journey.</p>
      </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={card.image} alt={card.title} className="w-24 h-24 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    )
}