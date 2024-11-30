import rightArrow from "../../assets/right-arrow.svg";

function FooterTop() {
    return (
        <div className="mb-16 justify-between flex flex-wrap">
            <div className="w-1/3">
                <h4 className="text-milk text-3xl leading-[0.85] border-l-2 border-milk pl-6 py-5">
                    Got a question? Share your email, and we'll get in touch with you.
                </h4>
            </div>
            <div className="w-1/3 pr-6 pl-6">
                <form action="">
                    <label htmlFor="email" className="text-milk text-xl mb-3.5 inline-block leading-none font-medium">
                        For any questions, suggestions, or comments, please fill out the form below.
                    </label>
                    <input type="email" id="email" autoComplete="on" required className="text-milk bg-inherit focus:bg-stone-700 border-2 placeholder:text-milk placeholder:focus:opacity-50 placeholder:transition placeholder:delay-[30] border-milk rounded-md px-4 py-2 w-full transition delay-[50] mb-5" placeholder="Email"/>
                    <div className="relative inline-block">
                        <input type="submit" value="Send" className="bg-milk text-dark border-none rounded-sm py-2 pl-4 pr-10 font-bold uppercase cursor-pointer"/>
                        <img src={rightArrow} alt="Right arrow" className="absolute pointer-events-none text-dark top-[-2px] right-0 w-[45px] h-[45px]"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FooterTop;