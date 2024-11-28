import { Link, NavLink } from "react-router-dom";
import logo_bg from '../../assets/logo_bg.png';

function Header() {
    return (
        <div className="bg-dark text-white px-4 py-1 relative z-[1]">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center lg:justify-start">
                    <Link to={'/'}>
                        <img src={logo_bg} className="mr-2" height="128px" width="128px" alt="logo"/>
                    </Link>
                    <ul className="font-semibold text-[18px] lg:mr-auto md:mb-0 justify-center flex flex-wrap pl-0 list-none w-auto py-2">
                        <li><NavLink className={({isActive}) =>`text-[15px] uppercase px-2 py-2 transition duration-200 hover:text-orange ${isActive ? 'active' : ''}`} to={'/'}>Home</NavLink></li>
                        <li><NavLink className={({isActive}) =>`text-[15px] uppercase px-2 py-2 transition duration-200 hover:text-orange ${isActive ? 'active' : ''}`} to={'/about'}>About Us</NavLink></li>
                        <li><NavLink className={({isActive}) =>`text-[15px] uppercase px-2 py-2 transition duration-200 hover:text-orange ${isActive ? 'active' : ''}`} to={'/services'}>Services</NavLink></li>
                        <li><NavLink className={({isActive}) =>`text-[15px] uppercase px-2 py-2 transition duration-200 hover:text-orange ${isActive ? 'active' : ''}`} to={'/realisations'}>Realisations</NavLink></li>
                    </ul>
                    <ul className="font-semibold text-[18px] mb-0 justify-center flex flex-wrap list-none">
                        <li>
                            <Link className="font-normal cursor-pointer px-3 py-1.5 text-base mr-2 text-center text-milk hover:text-dark border-milk hover:bg-milk border-[1px] rounded-md" to={'/reviews'}>Reviews</Link>
                        </li>
                        <li>
                            <Link className="font-normal cursor-pointer px-3 py-1.5 text-base rounded-md text-center text-dark bg-lemon hover:bg-light-lemon" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;