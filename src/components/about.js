import image4 from "../assets/image-4.jpg";
export default function AppAbout(){
return(
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 gap-6">
      {/* Image on the Left */}
      <img src={image4} alt="Example" className="w-48 h-48 object-cover rounded-lg" />

      {/* Text on the Right */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">How Can We Help You?</h2>
        <p className="text-gray-600 mt-2">
        At [Your Medical Website Name], we are dedicated to providing high-quality healthcare services with a commitment to patient care, innovation, and excellence. Our mission is to empower individuals with the knowledge, support, and medical expertise they need to lead healthier lives.
        </p>
        <p className="text-gray-600 mt-2">
        We are a team of experienced doctors, healthcare professionals, and medical experts who strive to deliver compassionate, patient-centered care. With advanced medical technology and a holistic approach, we aim to improve the well-being of our patients.
        </p>
        <p className="text-gray-600 mt-2">
        At [Your Medical Website Name], we believe that your health is our priority. Whether you need routine checkups, specialized treatments, or expert medical advice, we are here to support you every step of the way.
        </p>
      </div>
    </div>
)
}