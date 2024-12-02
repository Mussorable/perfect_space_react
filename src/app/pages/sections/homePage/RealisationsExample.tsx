import Section from "../Section.tsx";

import pr1 from "../../../../assets/realisations/pr_1.webp";
import pr2 from "../../../../assets/realisations/pr_2.webp";
import pr3 from "../../../../assets/realisations/pr_3.webp";
import pr4 from "../../../../assets/realisations/pr_4.webp";

function RealisationsExample() {
    return (
        <Section>
            <div className="justify-center">
                <div className="text-center mb-6">
                    <h2 className="font-semibold text-3xl">Our recent projects might amaze you</h2>
                    <p>Check out our impressive work in a small gallery</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/3">
                    <div className="mb-7">
                        <div className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px]">
                            <img src="" alt=""/>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr1 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="mb-7">
                        <div className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px]">
                            <img src="" alt=""/>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr3 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="mb-7">
                        <div className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px]">
                            <img src="" alt=""/>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr2 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="mb-7">
                        <div className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px]">
                            <img src="" alt=""/>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr4 } alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default RealisationsExample;