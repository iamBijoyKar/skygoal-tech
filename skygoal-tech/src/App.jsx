import Header from './components/Header';
import Hero from './components/hero/Hero';
import TASection from './components/TASection';
import Destinations from './components/Destinations/Destinations';
import './css/App.css';
import DiscountSection from './components/DiscountSection';
import BookingSection from './components/Bookings/BookingSection';
import TestimonialSection from './components/Testimonials/TestimonialSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <TASection/>
        <Destinations/>
        <DiscountSection/>
        {/* <BookingSection/> */}
        <TestimonialSection/>
        <Footer/>
    </div>
  )
}

export default App
