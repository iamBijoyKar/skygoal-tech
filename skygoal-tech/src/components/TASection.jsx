import './../css/TASection.css';
import OrBtn from './OrBtn';
import NameCard from './NameCard';

export default function TASection(){

    return(
        <section className="ta-section flex">
            <div className="cards flex-col">
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={"/avatar.png"}   />
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={"/avatar-2.png"}   />
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={"/avatar-3.png"}   />
            </div>
            <div className="texts">
                <h1 className="first-heading bold">
                    Tropical Adventure
                </h1>
                <h2 className="second-heading">
                    for Students.
                </h2>
                <p>
                    Student Tropical Vacation: Relax and Recharge
                </p>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit</li>
                    <li>tortor id euismod habitant</li>
                    <li>Sed suspendisse id in ultrices</li>
                </ul>
                <OrBtn text={'Explore More'}/>
            </div>
        </section>
    )
}