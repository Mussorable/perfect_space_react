import Section from "../Section.tsx";
import drillIcon from '../../../../assets/svg/drill.svg';
import hammerIcon from '../../../../assets/svg/hammer.svg';
import brushIcon from '../../../../assets/svg/brush.svg';

function Advantages() {
    return (
        <Section>
            <div className="justify-center">
                <div className="text-center mb-6">
                    <h2 className="font-semibold text-xl px-2 lg:text-2xl w-full lg:w-3/5 lg:mx-auto">Comprehensive and modern interior finishes in homes, apartments, offices, as well as commercial and service spaces.</h2>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="text-center w-full lg:w-1/3">
                    <div className="max-w-[360px] mx-auto my-0 pt-14 px-0 pb-7">
                        <div className="text-center">
                            <img className="w-[72px] h-[72px] inline-block align-middle" src={brushIcon} alt="Brush icon"/>
                        </div>
                        <h5 className="mt-8 mb-4 text-xl font-semibold leading-6">Professional Interior Finishes</h5>
                        <p className="leading-6">We offer comprehensive finishing services for homes, apartments, and offices, tailored to meet the individual needs of our clients.</p>
                    </div>
                </div>
                <div className="text-center w-full lg:w-1/3">
                    <div className="max-w-[360px] mx-auto my-0 pt-14 px-0 pb-7">
                        <div className="text-center">
                            <img className="w-[72px] h-[72px] inline-block align-middle" src={drillIcon} alt="Drill icon"/>
                        </div>
                        <h5 className="mt-8 mb-4 text-xl font-semibold leading-6">Comprehensive Renovation Services for Private and Commercial Spaces</h5>
                        <p className="leading-6">We specialize in interior renovations and modernizations, restoring a modern appearance and top-level functionality.</p>
                    </div>
                </div>
                <div className="text-center w-full lg:w-1/3">
                    <div className="max-w-[360px] mx-auto my-0 pt-14 px-0 pb-7">
                        <div className="text-center">
                            <img className="w-[72px] h-[72px] inline-block align-middle" src={hammerIcon} alt="Hammer icon"/>
                        </div>
                        <h5 className="mt-8 mb-4 text-xl font-semibold leading-6">Installation and Detailing Finishes</h5>
                        <p className="leading-6">Precise installation work, detailing, and finishing touches that give interiors a refined and elegant final look.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Advantages;