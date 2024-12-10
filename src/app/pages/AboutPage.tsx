import Advantages from "./sections/aboutPage/Advantages.tsx";
import Reviews from "./sections/aboutPage/Reviews.tsx";
import Address from "./sections/aboutPage/Address.tsx";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import rw3 from "../../assets/realisations/example_rw_3.webp";
import Consulting from "./sections/aboutPage/Consulting.tsx";

function AboutPage() {
    const { setBgImageSrc, setPageTitle } = useOutletContext<{
        setBgImageSrc: (src: string) => void,
        setPageTitle: (title: string) => void,
    }>();

    useEffect(() => {
        setBgImageSrc(rw3);
        setPageTitle("About Us")
    }, []);

    return (
        <>
            <Advantages />
            <Reviews />
            <Consulting />
            <Address />
        </>
    );
}

export default AboutPage;