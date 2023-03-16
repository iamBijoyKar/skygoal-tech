import BookNowForm from "./BookNowForm";
import img from './../../assets/image 41.png';
import './../../css/BookingSection.css';
export default function BookingSection(){

    return(
        <section className="booking-section flex">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <BookNowForm/>
        </section>
    )
}