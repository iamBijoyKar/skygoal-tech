import './../css/TASection.css';
import OrBtn from './OrBtn';
import NameCard from './NameCard';
import avatar from './../assets/avatar.png';

export default function TASection(){

    return(
        <section className="ta-section flex">
            <div className="cards flex-col">
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={avatar}   />
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={avatar}   />
                <NameCard name={'Jenny Wilson'} des={'Lorem ipsum afsf fg gfgf adfg agdf hbdgd gda hdgh dtht ha'} img={avatar}   />
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
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <OrBtn text={'Explore More'}/>
            </div>
        </section>
    )
}