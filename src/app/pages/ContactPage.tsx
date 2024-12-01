import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import readyRenovation from "../../assets/realisations/ready_renovation.webp";
import ContactForm from "./sections/contactPage/ContactForm.tsx";

function ContactPage() {
    const { setBgImageSrc, setPageTitle } = useOutletContext<{
        setBgImageSrc: (src: string) => void,
        setPageTitle: (title: string) => void,
    }>();

    useEffect(() => {
        setBgImageSrc(readyRenovation);
        setPageTitle("Contact");
    }, []);

    return (
        <>
            <ContactForm />
        </>
    );
}

export default ContactPage;