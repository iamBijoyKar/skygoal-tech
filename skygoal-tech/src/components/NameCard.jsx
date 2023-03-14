import './../css/NameCard.css';

export default function NameCard({name,des,img}){

    return(
        <div className="name-card flex center-both">
            <img src={img} className='badge-img' alt="" />
            <div className="texts">
                <h4>{name}</h4>
                <p>{des}</p>
            </div>
        </div>

    )
}