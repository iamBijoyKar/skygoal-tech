import BookNowForm from "./BookNowForm";
import img from './../../assets/image 41.png';
export default function BookingSection(){

    return(
        <section className="booking-sectoin flex">
            <BookNowForm/>
            <div className="img-div">
                <img src={img} alt="" />
            </div>
        </section>
    )
}