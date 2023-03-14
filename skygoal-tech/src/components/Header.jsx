import './../css/Header.css';
import OrBtn from './OrBtn';


export default function Header(){


    return(
        <div className="header flex">
            <div className="nav-bar">
                <ul className='flex'>
                    <li className="nav-link"><a href="http://">Home</a></li>
                    <li className="nav-link"><a href="http://">About</a></li>
                    <li className="nav-link"><a href="http://">Schedules</a></li>
                    <li className="nav-link"><a href="http://">Membership</a></li>
                    <li className="nav-link"><a href="http://">Pricing</a></li>
                </ul>
            </div>
            <div className="header-btns center-a flex gap-1">
                <a href="http://" className="offers-link">Offers</a>
                <OrBtn text={'Shop Now'}/>
            </div>
        </div>
    )
}