import Section from "../Section.tsx";
import aiUrl from "../../../../assets/preview/ai-rooms-flat.webp";

function Consulting() {
    return (
        <Section className="section-dark">
            <div className="flex flex-wrap">
                <div className="w-2/3">
                    <div className="max-w-6xl -mt-[140px] relative h-[560px]">
                        <img className="max-w-6xl w-auto absolute top-[15%] -left-[5%] h-[540px]" src={aiUrl} alt="Set of tools"/>
                    </div>
                </div>
                <div className="w-1/3 ml-auto">
                    <div>
                        <h3 className="text-3xl font-bold text-milk">Consulting</h3>
                        <h5 className="text-xl font-semibold text-gray-200 mt-8">Individual consulting, fast execution, and support after project completion</h5>
                        <p className="leading-7 text-[20px] mt-8 font-light text-milk">
                            We provide professional consulting at every stage of finishing and modernization, as well as support after project completion. We execute work quickly and on schedule, ensuring the highest quality and customer satisfaction. We also assist with service-related matters after the project is completed.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Consulting;