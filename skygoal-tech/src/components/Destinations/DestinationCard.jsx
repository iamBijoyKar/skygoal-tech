import './../../css/DestinationCard.css';
import icon from './../../assets/icons.png';
export default function({heading,loc,img,rateings}){


    return(
        <div className="des-card">
            <div className="head">
                <img src={img} className='' alt="" />
                <div className="content">
                    <h1>{heading}</h1>
                    <div className="flex center-a">
                        <p>{loc}</p>
                        <img src={icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}