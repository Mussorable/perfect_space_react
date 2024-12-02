import Section from "../Section.tsx";

import cert1 from "../../../../assets/certifications/cert_1.png";
import cert2 from "../../../../assets/certifications/cert_2.png";
import cert3 from "../../../../assets/certifications/cert_3.png";
import cert4 from "../../../../assets/certifications/cert_4.png";

function Certificates() {
    return (
        <Section>
            <div className="justify-center">
                <div className="text-center mb-6">
                    <h2 className="font-semibold text-3xl">Our Certificates</h2>
                    <p>A presentation of official certificates confirming the quality, expertise, and reliability of our
                        construction services.</p>
                </div>
            </div>
            <div className="diamonds-container my-12 grid place-items-center">
                <div className="diamond diamond-content">
                    <img
                        className="absolute inset-0 scale-150 -rotate-45 w-full h-full object-cover cursor-pointer"
                        src={ cert1 }
                        alt=""
                    />
                </div>
                <div className="diamond diamond-black"></div>
                <div className="diamond diamond-content">
                    <img
                        className="absolute inset-0 scale-150 -rotate-45 w-full h-full object-cover cursor-pointer"
                        src={ cert2 }
                        alt=""
                    />
                </div>
                <div className="diamond diamond-black"></div>
                <div className="diamond diamond-content">
                    <img
                        className="absolute inset-0 scale-150 -rotate-45 w-full h-full object-cover cursor-pointer"
                        src={ cert3 }
                        alt=""
                    />
                </div>
                <div className="diamond diamond-black"></div>
                <div className="diamond diamond-content">
                    <img
                        className="absolute inset-0 scale-150 -rotate-45 w-full h-full object-cover cursor-pointer"
                        src={ cert4 }
                        alt=""
                    />
                </div>
            </div>
        </Section>
    )
}

export default Certificates;