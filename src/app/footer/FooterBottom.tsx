import { Link } from "react-router-dom";

function FooterBottom() {
    return (
        <div className="border-t-[1px] border-milk pt-[20px] flex flex-wrap">
            <div className="flex-1">
                <ul className="text-milk font-semibold *:opacity-75 transition delay-[30] flex flex-wrap pl-0 mb-0 list-none">
                    <li className="hover:opacity-100"><Link to={ "/" } className="px-4 py-2">Home</Link></li>
                    <li className="hover:opacity-100"><Link to={ "/about" } className="px-4 py-2">About Us</Link></li>
                    <li className="hover:opacity-100"><Link to={ "/services" } className="px-4 py-2">Services</Link></li>
                    <li className="hover:opacity-100"><Link to={ "/realisations" } className="px-4 py-2">Realisations</Link></li>
                    <li className="hover:opacity-100"><Link to={ "/reviews" } className="px-4 py-2">Reviews</Link></li>
                    <li className="hover:opacity-100"><Link to={ "/contact" } className="px-4 py-2">Contact</Link></li>
                </ul>
            </div>
            <div className="">
                <Link to={ "/policy" }
                      className="focus:outline-none opacity-75 hover:opacity-100 transition delay-[30] text-milk font-semibold pr-4">Privacy
                    Policy</Link>
            </div>
        </div>
    );
}

export default FooterBottom;