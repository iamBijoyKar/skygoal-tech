import './../../css/DestinationCard.css';
export default function({heading,loc,img,rateings}){


    return(
        <div className="des-card">
            <div className="head">
                <img src={img} className='' alt="" />
                <div className="content">
                    <h1>{heading}</h1>
                    <div className="flex center-a">
                        <p>{loc}</p>
                        <img src={'/icons.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}