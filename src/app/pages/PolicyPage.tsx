import Section from "./sections/Section.tsx";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import calmApartment from "../../assets/realisations/calm-apartment.webp";

function PolicyPage() {
    const { setBgImageSrc, setPageTitle } = useOutletContext<{
        setBgImageSrc: (src: string) => void,
        setPageTitle: (title: string) => void,
    }>();

    useEffect(() => {
        setBgImageSrc(calmApartment);
        setPageTitle("Privacy Policy")
    }, []);

    return (
        <div>
            <Section>
                <div className="justify-center">
                    <div className="text-center mb-6">
                        <h2 className="font-semibold text-4xl">Privacy Policy</h2>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">1. Introduction</h3>
                    <p className="mb-4">This Privacy Policy outlines the rules for processing, storing, and protecting personal data of users of the Perfect Space website, available at { import.meta.env.VITE_CONTACT_EMAIL }. The data controller is Perfect Space, based in Gaszyn, hereinafter referred to as the 'Controller.'</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">2. Types of Collected Data</h3>
                    <p className="mb-2">When using our website, we may collect the following personal data from users:</p>
                    <ul className="list-disc ml-10 mb-4">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Cookies</li>
                        <li>Other data voluntarily provided by users via forms available on the website.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">3. Purposes of Data Processing</h3>
                    <p className="mb-2">Users' personal data is processed for the following purposes:</p>
                    <ul className="list-disc ml-10 mb-4">
                        <li>Enabling the use of services offered through the website</li>
                        <li>Fulfilling orders and providing customer support</li>
                        <li>Sending newsletters (with prior user consent)</li>
                        <li>Conducting analysis and statistics regarding website usage</li>
                        <li>Ensuring security and protecting the rights of the Controller.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">4. Legal Basis for Data Processing</h3>
                    <p className="mb-2">Personal data is processed based on:</p>
                    <ul className="list-disc ml-10 mb-4">
                        <li>User consent (Article 6(1)(a) of GDPR)</li>
                        <li>Performance of a contract or steps taken at the user's request before entering into a contract (Article 6(1)(b) of GDPR)</li>
                        <li>Legitimate interest of the Controller (Article 6(1)(f) of GDPR), such as conducting statistical and marketing analyses.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">5. Data Sharing</h3>
                    <p className="mb-2">Users' personal data may be shared with the following recipients:</p>
                    <ul className="list-disc ml-10 mb-4">
                        <li>Entities processing data on behalf of the Controller, such as IT service providers</li>
                        <li>Public authorities, if required by law.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">6. Data Storage</h3>
                    <p className="mb-4">Personal data is stored for the period necessary to achieve the purposes for which it was collected or for the period required by applicable law. Data processed based on user consent is stored until consent is withdrawn.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">7. User Rights</h3>
                    <p className="mb-2">Users have the following rights:</p>
                    <ul className="list-disc ml-10 mb-4">
                        <li>Right to access their data</li>
                        <li>Right to correct their data</li>
                        <li>Right to delete their data</li>
                        <li>Right to restrict data processing</li>
                        <li>Right to data portability</li>
                        <li>Right to object to data processing</li>
                        <li>Right to withdraw consent for data processing.</li>
                    </ul>
                    <p className="mb-4">To exercise these rights, users can contact the Controller via email: { import.meta.env.VITE_CONTACT_EMAIL }.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">8. Cookies</h3>
                    <p className="mb-4">The website uses cookies to ensure proper functionality and for analytical and marketing purposes. Users can manage their cookie settings through their browser preferences.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">9. Changes to the Privacy Policy</h3>
                    <p className="mb-4">The Controller reserves the right to make changes to this Privacy Policy. Users will be informed of any updates via the website.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">10. Contact</h3>
                    <p className="mb-4">For questions regarding this Privacy Policy, please contact the Controller via email: { import.meta.env.VITE_CONTACT_EMAIL }.</p>
                </div>
                <div>
                    <hr/>
                    <h5 className="text-xl font-bold mb-4 mt-2">Last updated: <span className="font-normal">01.12.2024 17:31</span></h5>
                </div>
            </Section>
        </div>
    )
}

export default PolicyPage;