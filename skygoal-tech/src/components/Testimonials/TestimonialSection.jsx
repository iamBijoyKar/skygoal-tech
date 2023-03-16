import './../../css/TestimonialsSection.css';
import TestimonialCard from './TestimonialCard';


export default function TestimonialSection(){


    return(
        <section className="testi-section">
           <h1 className="heading">
            Testimonials
           </h1>
            <div className="testimonials flex center-both">
                <TestimonialCard name={'Corey Korsgaard'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={"/testi-1.png"} />
                <TestimonialCard name={'Jakob Aminoff'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={"/testi-2.png"} />
                <TestimonialCard name={'Carla Press'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={"/testi-3.png"} />
            </div>
        </section>
    )
}