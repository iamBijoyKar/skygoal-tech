import './../../css/Destinations.css';
import cardImg from './../../assets/card-image.png';
import ra from './../../assets/v-right.png';
import la from './../../assets/v-left.png';
import DestinationCard from './DestinationCard';
import { useState } from 'react';


export default function Destinations(){
    const [slide,setSlide] = useState(1);
    const totalSlides = 5;
    const slider = document.querySelector('#slides');
    const card = document.querySelector('.des-card');

    const leftSlide = (e) =>{
        console.log('clicked')
        slider.scrollLeft -= card.clientWidth;
        if(slide == 1){
            return ;
        }
        else{
            setSlide(slide-1);
        }
    }
    const rightSlide = () =>{
        console.log('clicked')
        slider.scrollLeft += card.clientWidth;
        if(slide == totalSlides){
            return ;
        }
        else{
            setSlide(slide+1);
        }
    }
    return(
        <section className="destinations">
            <h1 className="heading">
                Our Destinations
            </h1>
            <div className="slider" id='slider'>
                <div className="slides flex" id='slides' >
                    <DestinationCard heading={'Harvard University'} img={cardImg} loc={'Cambridge, Massachusetts, UK'} rateings={'4.8'}/>
                    <DestinationCard heading={'Harvard University'} img={cardImg} loc={'Cambridge, Massachusetts, UK'} rateings={'4.8'}/>
                    <DestinationCard heading={'Harvard University'} img={cardImg} loc={'Cambridge, Massachusetts, UK'} rateings={'4.8'}/>
                    <DestinationCard heading={'Harvard University'} img={cardImg} loc={'Cambridge, Massachusetts, UK'} rateings={'4.8'}/>
                    <DestinationCard heading={'Harvard University'} img={cardImg} loc={'Cambridge, Massachusetts, UK'} rateings={'4.8'}/>
                </div>
                <div className="controls flex center-both">
                    <img src={la} alt="" className='arrow' onClick={leftSlide} />
                    <span className='nav'>
                        {slide}<span>/{totalSlides}</span>
                    </span>
                    <img src={ra} className='arrow' onClick={rightSlide} alt="" />
                </div>
            </div>
        </section>
    )
}