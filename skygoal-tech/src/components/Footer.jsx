import './../css/Footer.css';


export default function Footer(){

    return(
        <footer className='flex-col' >
            <h1 className="heading">
            Student Special: Discounted rates <br/> on tropical getaways!
            </h1>
            <p className="des">
            Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.
            </p>
            <div className="links flex">
                <a href="" className='link' >Privacy Policy</a>
                <a href="" className='link'>Terms of Use</a>
                <a href="" className='link'>Sales and Refunds</a>
                <a href="" className='link'>Legal</a>
                <a href="" className='link'>About</a>
                <a href="" className='link'>Schedules</a>
                <a href="" className='link'>Pricing</a>
                <a href="" className='link'>Membership</a>
                <a href="" className='link last'>Joins</a>
            </div>
        </footer>
    )
}