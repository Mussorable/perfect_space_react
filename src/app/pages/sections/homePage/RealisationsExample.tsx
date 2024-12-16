import Section from "../Section.tsx";

import pr1 from "../../../../assets/realisations/pr_1.webp";
import pr2 from "../../../../assets/realisations/pr_2.webp";
import pr3 from "../../../../assets/realisations/pr_3.webp";
import pr4 from "../../../../assets/realisations/pr_4.webp";
import magnifierUrl from "../../../../assets/svg/magnifier.svg";
import { useOutletContext } from "react-router-dom";
import {MouseEvent} from "react";

function RealisationsExample() {
    const { handleOpenImage } = useOutletContext<{
        handleOpenImage: (event: MouseEvent<HTMLDivElement>) => void,
    }>();

    return (
        <Section>
            <div id="block1" className="justify-center">
                <div className="text-center mb-6 mx-2 lg:mx-0">
                    <h2 className="font-semibold text-2xl lg:text-3xl">Our recent projects might amaze you</h2>
                    <p>Check out our impressive work in a small gallery</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="lg:w-1/3 w-full">
                    <div className="mb-7">
                        <div onClick={handleOpenImage} className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px] group cursor-pointer">
                            <div className="absolute p-3 bg-milk rounded-full find-center-magnifier border-2 border-orange opacity-0 group-hover:opacity-80">
                                <img src={ magnifierUrl } alt=""/>
                            </div>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr1 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    <div className="mb-7">
                        <div onClick={handleOpenImage} className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px] group cursor-pointer">
                            <div className="absolute p-3 bg-milk rounded-full find-center-magnifier border-2 border-orange opacity-0 group-hover:opacity-80">
                                <img src={ magnifierUrl } alt=""/>
                            </div>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr3 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    <div className="mb-7">
                        <div onClick={handleOpenImage} className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px] group cursor-pointer">
                            <div className="absolute p-3 bg-milk rounded-full find-center-magnifier border-2 border-orange opacity-0 group-hover:opacity-80">
                                <img src={ magnifierUrl } alt=""/>
                            </div>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr2 } alt=""/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="mb-7">
                        <div onClick={handleOpenImage} className="px-3 relative max-w-full m-auto overflow-hidden max-h-[400px] h-[400px] group cursor-pointer">
                            <div className="absolute p-3 bg-milk rounded-full find-center-magnifier border-2 border-orange opacity-0 group-hover:opacity-80">
                                <img src={ magnifierUrl } alt=""/>
                            </div>
                            <img className="w-full h-full object-cover mx-auto block max-w-full" src={ pr4 } alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default RealisationsExample;