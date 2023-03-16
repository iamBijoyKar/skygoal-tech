import { useState } from 'react';
import './../../css/NumInput.css';
import plusLogo from './../../assets/v+.svg';
import minLogo from './../../assets/v-.svg';

export default function NumInput({number}){
    const [num, setNum] = useState(number);
    const plusBtn = (e)=>{
        setNum(num+1);
    }
    const minusBtn = (e) =>{
        if(num > 1){
            setNum(num-1);
        }
    }

    return(
        <div className="input-container flex center-a">
            <img src={minLogo} className='minus' onClick={minusBtn} alt="" />
            <input type="text" value={num} />
            <img src={plusLogo} className='plus' onClick={plusBtn} alt="" />
        </div>
    )
}