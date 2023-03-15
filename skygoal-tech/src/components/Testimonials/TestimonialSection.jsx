import './../../css/TestimonialsSection.css';
import TestimonialCard from './TestimonialCard';
import t1Img from './../../assets/testi-1.png';


export default function TestimonialSection(){


    return(
        <section className="testi-section">
           <h1 className="heading">
            Testimonials
           </h1>
            <div className="testimonials flex center-both">
                <TestimonialCard name={'Corey Korsgaard'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={t1Img} />
                <TestimonialCard name={'Corey Korsgaard'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={t1Img} />
                <TestimonialCard name={'Corey Korsgaard'} des={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} img={t1Img} />
            </div>
        </section>
    )
}