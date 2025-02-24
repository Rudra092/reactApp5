import AppCarousel from './carousel';
import AppCards from './cards';
import AppAbout from './about';
import AppPricing from './pricing';
import AppTestimonial from './testimonial';
function Home() {
    return (
      <div className="App">
      <main>
      <AppCarousel/>
      <AppCards/>
      <AppAbout/>
      <AppPricing/>
      <AppTestimonial/>
      </main>
      </div>
    );
  }
  
  export default Home;