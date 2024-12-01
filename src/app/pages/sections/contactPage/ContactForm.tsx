import Section from "../Section.tsx";
import mapLocation from '../../../../assets/svg/map-location.svg';
import mobileIcon from '../../../../assets/svg/mobile.svg';
import infoIcon from '../../../../assets/svg/info.svg';

function ContactForm() {
    return (
        <Section>
            <div>
                <div>
                    <h2 className="font-bold mt-12 mb-1 text-3xl">Send us a message</h2>
                    <h5 className="mb-8 text-md">You can contact us regarding our work. We will get back to you as soon as possible.</h5>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <form action="">
                        <div className="relative pt-6 mb-4 will-change-[left, top, contents] leading-snug">
                            <label className="absolute text-stone-400 pointer-events-none bottom-[7px] left-2" htmlFor="username">Your name</label>
                            <input className="border-b-2 px-2 border-stone-200 h-9 text-md block w-full py-2 text-stone-700 focus:border-b-orange focus:bg-gray-100 outline-none" id="username" type="text"/>
                        </div>
                        <div className="relative pt-6 mb-4 will-change-[left, top, contents] leading-snug">
                            <label className="absolute text-stone-400 pointer-events-none bottom-[7px] left-2" htmlFor="email">Your email</label>
                            <input className="border-b-2 px-2 border-stone-200 h-9 text-md block w-full py-2 text-stone-700 focus:border-b-orange focus:bg-gray-100 outline-none" id="email" type="email"/>
                        </div>
                        <div className="relative pt-6 mb-4 will-change-[left, top, contents] leading-snug">
                            <label className="absolute text-stone-400 pointer-events-none bottom-[7px] left-2" htmlFor="phone-number">Your phone number</label>
                            <input className="border-b-2 px-2 border-stone-200 h-9 text-md block w-full py-2 text-stone-700 focus:border-b-orange focus:bg-gray-100 outline-none" id="phone-number" type="tel"/>
                        </div>
                        <div className="relative pt-6 mb-4 will-change-[left, top, contents] leading-snug">
                            <label className="absolute text-stone-400 pointer-events-none bottom-[7px] left-2" htmlFor="message">Your message</label>
                            <textarea className="min-h-40 border-b-2 px-2 border-stone-200 h-9 text-md block w-full py-2 text-stone-700 focus:border-b-orange focus:bg-gray-100 outline-none" name="" id="message"></textarea>
                        </div>
                        <div className="pt-9 text-center">
                            <input className="font-normal cursor-pointer px-3 py-1.5 text-base rounded-md text-center text-dark bg-lemon hover:bg-light-lemon" type="submit" value="Contact Us"/>
                        </div>
                    </form>
                </div>
                <div className="w-1/3 ml-auto">
                    <div className="relative">
                        <img src={mapLocation} height="40px" width="40px" alt="GPS Map icon"
                             className="absolute top-[18px] left-[-35px]"/>
                        <h5 className="font-semibold inline-block my-6 mx-3 text-xl">Where to Find Us</h5>
                        <address className="text-gray-600 font-normal text-md mx-3 not-italic">
                            Graniczna 14 str.
                            <br/>
                            98-300
                            <br/>
                            Gaszyn
                        </address>
                    </div>
                    <div className="relative">
                        <img src={ mobileIcon } height="40px" width="40px" alt="GPS Map icon"
                             className="absolute top-[18px] left-[-35px]"/>
                        <h5 className="font-semibold inline-block my-6 mx-3 text-xl">Contact Details</h5>
                        <address className="text-gray-600 font-normal text-md mx-3 not-italic">
                            { import.meta.env.VITE_OWNER }
                            <br/>
                            { import.meta.env.VITE_CONTACT_PHONE }
                            <br/>
                            { import.meta.env.VITE_CONTACT_EMAIL }
                        </address>
                    </div>
                    <div className="relative">
                        <img src={ infoIcon } height="40px" width="40px" alt="GPS Map icon"
                             className="absolute top-[18px] left-[-35px]"/>
                        <h5 className="font-semibold inline-block my-6 mx-3 text-xl">Legal Information</h5>
                        <p className="text-gray-600 font-normal text-md mx-3">
                            Perfect Space JDG
                            <br/>
                            REGON: 363007044
                            <br/>
                            NIP: 8322025895
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default ContactForm;