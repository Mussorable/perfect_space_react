import Section from "../Section.tsx";

function Summary() {
    return (
        <Section>
            <div id="block2" className="font-bold">
                <div>
                    <h4 className="text-orange border-b-[1px] border-b-orange text-4xl mb-12 px-5 leading-snug">Summary</h4>
                </div>
                <div className="flex flex-wrap justify-around">
                    <div className="w-[200px]">
                        <p className="text-2xl m-0">Clients</p>
                        <p className="text-orange my-0 text-6xl leading-snug">500+</p>
                    </div>
                    <div className="w-[200px]">
                        <p className="text-2xl m-0">Sq. Meters</p>
                        <p className="text-orange my-0 text-6xl leading-snug">6800+</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around mt-12">
                    <div className="w-[200px]">
                        <p className="text-2xl m-0">Years of experience</p>
                        <p className="text-orange my-0 text-6xl leading-snug">12</p>
                    </div>
                    <div className="w-[200px]">
                        <p className="text-2xl m-0">Savings on materials</p>
                        <p className="text-orange my-0 text-6xl leading-snug">12%</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Summary;