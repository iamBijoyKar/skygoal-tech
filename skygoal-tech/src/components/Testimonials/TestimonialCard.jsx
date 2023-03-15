import './../../css/TestimonialCard.css'

export default function TestimonialCard({name,des,img}){

    return(
        <div className="testi-card flex-col">
            <img src={img} alt="" />
            <div className="div">
                <p className="name">{name}</p>
            </div>
            <p className="des">
                {des}
            </p>
        </div>
    )
}


