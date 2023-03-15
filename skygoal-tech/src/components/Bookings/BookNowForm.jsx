import './../../css/BookNowForm.css';
import NumInput from './NumInput';
export default function BookNowForm(){


    return(
        <div className="book-now-form">
            <h1 className="heading">Book now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="city-input flex-col">
                <label htmlFor="city">city</label>
                <input type='text' placeholder='Placeholder' id='city' />
            </div>
            <div className="flex">
                <div className="arrival-input flex-col">
                    <label htmlFor="arrival">arrival</label>
                    <input type='text' placeholder='Placeholder' id='arrival'/>
                </div>
                <div className="departure-input flex-col">
                    <label htmlFor="arrival">departure</label>
                    <input type='text' placeholder='Placeholder' id='departure'/>
                </div>
            </div>
           <div className="flex">
                <NumInput number={4} />
                <NumInput number={1} />
           </div>
        </div>
    )
}