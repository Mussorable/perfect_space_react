import Section from "../Section.tsx";
import { Link } from "react-scroll";

function Offers() {
    return (
        <Section>
            <div className="justify-center">
                <div className="text-center mb-6 mx-2 lg:mx-0">
                    <h2 className="font-semibold text-2xl lg:text-3xl">What do we offer our clients?</h2>
                    <p>We offer comprehensive home and apartment renovations, including complete interior finishing services</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 lg:gap-0">
                <div className="lg:w-1/3 px-6 w-full">
                    <div className="border-[1px] group hover:scale-105 transition delay-100 border-gray-300 rounded-md p-6">
                        <Link to={"block1"} smooth={true} duration={500} className="outline-0 text-dark cursor-pointer">
                            <h4 className="mb-5 text-center group-hover:text-orange group-hover:border-b-orange border-b-[1px] border-transparent transition delay-100 font-semibold text-xl">Interior finishing</h4>
                        </Link>
                        <p className="mb-0">We offer high-quality interior finishing services, transforming your space into a stylish and functional environment tailored to your preferences.</p>
                    </div>
                </div>
                <div className="lg:w-1/3 px-6 w-full">
                    <div className="border-[1px] group hover:scale-105 transition delay-100 border-gray-300 rounded-md p-6">
                        <Link to={"block2"} smooth={true} duration={500} className="outline-0 text-dark cursor-pointer">
                            <h4 className="mb-5 text-center group-hover:text-orange group-hover:border-b-orange border-b-[1px] border-transparent transition delay-100 font-semibold text-xl">Comprehensive construction services</h4>
                        </Link>
                        <p className="mb-0">From start to finish, we manage all aspects of your renovation project, ensuring seamless execution and a stress-free experience for you.</p>
                    </div>
                </div>
                <div className="lg:w-1/3 px-6 w-full">
                    <div className="border-[1px] group hover:scale-105 transition delay-100 border-gray-300 rounded-md p-6">
                        <Link to={"block3"} smooth={true} duration={500} className="outline-0 text-dark cursor-pointer">
                            <h4 className="mb-5 text-center group-hover:text-orange group-hover:border-b-orange border-b-[1px] border-transparent transition delay-100 font-semibold text-xl">Expert advice</h4>
                        </Link>
                        <p className="mb-0">Our team provides professional guidance on processes, materials, costs, and construction work, helping you make informed decisions and achieve your desired results.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Offers;