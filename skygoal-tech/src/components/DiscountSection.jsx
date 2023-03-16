import './../css/DiscountSection.css';
import OrBtn from './OrBtn';
import imgPerson from './../assets/image 40.png';
export default function DiscountSection(){

    return(
        <section className="discount-section flex">
            <div className="texts">
                <p className="top">Get 20% off for student</p>
                <h1 className="first-heading bold">
                    Student discounts available.
                </h1>
                <h2 className="second-heading">
                    Get ready for some fun in the sun!
                </h2>
                <ul>
                    <li>Loremfg ag adg h ad g fh ds</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>ortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </ul>
                <OrBtn text={'Explore More'} />
            </div>
            <div className="img-div flex">
                <img src={imgPerson} alt="" />
                <span></span>
                <span></span>
            </div>
        </section>
    )
}