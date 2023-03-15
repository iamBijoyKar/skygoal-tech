import { useState } from 'react';
import './../../css/NumInput.css';
import plusLogo from './../../assets/v+.svg';
import minLogo from './../../assets/v-.svg';

export default function NumInput({number}){
    const [num, setnum] = useState(number);

    return(
        <div className="input-container flex center-a">
            <img src={minLogo} alt="" />
            <input type="text" value={num} />
            <img src={plusLogo} alt="" />
        </div>
    )
}