import Section from "../Section.tsx";

import houseUrl from "../../../../assets/preview/house_preview.png";
import bathroomUrl from "../../../../assets/preview/option_bathroom.webp";
import ceilingUrl from "../../../../assets/preview/option_ceiling.webp";
import planUrl from "../../../../assets/preview/option_making_plan.webp";
import wallsUrl from "../../../../assets/preview/option_walls.webp";
import floorUrl from "../../../../assets/preview/option_wooden_floor.webp";
import { useEffect, useRef } from "react";

function Reviews() {
    const cloudRefs = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        cloudRefs.current.forEach((element) => {
            const duration = Math.floor(Math.random() * 5 + 5);
            element.style.animationDuration = `${duration}s`;
        });
    }, []);

    const addRef = (el: HTMLImageElement | null) => {
        if (el && !cloudRefs.current.includes(el)) cloudRefs.current.push(el);
    }

    return (
        <Section>
            <div className="flex flex-wrap">
                <div className="lg:w-1/2 w-full px-4 lg:mx-auto lg:pl-8">
                    <h3 className="text-2xl font-semibold lg:font-bold mt-12 mb-1">Customer Reviews</h3>
                    <h5 className="text-xl font-semibold mt-1 mb-6 lg:mb-12">See what our clients are saying about our work.</h5>
                    <p className="pr-8">
                        We have been trusted with the renovation of many apartments and homes. The reviews from our clients speak for themselves. You can read their testimonials on our dedicated review page, where you will see how highly people value the quality of our work.
                    </p>
                </div>
                <div className="lg:w-1/2 w-full px-4 lg:mx-auto">
                    <div className="max-w-5xl lg:mt-[-140px] relative h-auto lg:h-[560px]">
                        <img ref={addRef} className="w-auto my-6 lg:my-0 px-6 lg:mx-auto block max-h-[560px] object-cover cloud-abstraction" src={houseUrl} alt="White modern house"/>
                        <img ref={addRef} className="left-[5%] animate-right top-[51%] h-[90px] lg:h-[180px] cloud-review cloud-abstraction" src={bathroomUrl} alt="Bathroom"/>
                        <img ref={addRef} className="left-[15%] animate-right top-[9%] h-[70px] lg:h-[140px] cloud-review cloud-abstraction" src={ceilingUrl} alt="Light ceiling"/>
                        <img ref={addRef} className="left-[53%] animate-left top-[2%] h-[85px] lg:h-[170px] cloud-review cloud-abstraction" src={planUrl} alt="cartoon house with pencil and paper"/>
                        <img ref={addRef} className="left-[70%] animate-left top-[34%] h-[95px] lg:h-[190px] cloud-review cloud-abstraction" src={wallsUrl} alt="Well done different walls"/>
                        <img ref={addRef} className="left-[60%] animate-left top-[78%] h-[70px] lg:h-[140px] cloud-review cloud-abstraction" src={floorUrl} alt="Wooden floor"/>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Reviews;