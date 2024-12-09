import Section from "../Section.tsx";

import houseUrl from "../../../../assets/preview/house_preview.png";
import bathroomUrl from "../../../../assets/preview/option_bathroom.webp";
import ceilingUrl from "../../../../assets/preview/option_ceiling.webp";
import planUrl from "../../../../assets/preview/option_making_plan.webp";
import wallsUrl from "../../../../assets/preview/option_walls.webp";
import floorUrl from "../../../../assets/preview/option_wooden_floor.webp";

function Reviews() {
    return (
        <Section>
            <div className="flex flex-wrap">
                <div className="w-1/2 mx-auto pl-8">
                    <h3 className="text-2xl font-bold mt-12 mb-1">Customer Reviews</h3>
                    <h5 className="text-xl font-semibold mt-1 mb-12">See what our clients are saying about our work.</h5>
                    <p className="pr-8">
                        We have been trusted with the renovation of many apartments and homes. The reviews from our clients speak for themselves. You can read their testimonials on our dedicated review page, where you will see how highly people value the quality of our work.
                    </p>
                </div>
                <div className="w-1/2 mx-auto">
                    <div className="max-w-5xl mt-[-140px] relative h-[560px]">
                        <img className="w-auto my-0 mx-auto block max-h-[560px] object-cover" src={houseUrl} alt="White modern house"/>
                        <img className="left-[5%] top-[51%] h-[180px] cloud-review" src={bathroomUrl} alt="Bathroom"/>
                        <img className="left-[15%] top-[9%] h-[140px] cloud-review" src={ceilingUrl} alt="Light ceiling"/>
                        <img className="left-[53%] top-[2%] h-[170px] cloud-review" src={planUrl} alt="cartoon house with pencil and paper"/>
                        <img className="left-[70%] top-[34%] h-[190px] cloud-review" src={wallsUrl} alt="Well done different walls"/>
                        <img className="left-[60%] top-[78%] h-[140px] cloud-review" src={floorUrl} alt="Wooden floor"/>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Reviews;