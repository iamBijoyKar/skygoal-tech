import './../../css/Hero.css';
import OrBtn from './../OrBtn';
import heroImg from './../../assets/image 37.png';
export default function Hero(){

    return(
        <section className="hero-section flex">
            <div className="hero-texts">
                <p className="top">
                    Discover the beauty of the topics
                </p>
                <h1 className="first-heading heading bold">
                    Tropical 
                    <br/>
                    Destinations
                </h1>
                <h1 className="second-heading heading">
                    For Student
                </h1>
                <p className="bottom">
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae 
                </p>
                <OrBtn text={'SIGN UP'}/>
            </div>
            <div className="hero-img flex center-both">
                <img src={heroImg} alt="hero image" className='hero-img_' />
            </div>
        </section>
    )
}