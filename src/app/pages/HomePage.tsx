import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import newApartment from "../../assets/realisations/new_apartment.webp";
import Offers from "./sections/homePage/Offers.tsx";
import RealisationsExample from "./sections/homePage/RealisationsExample.tsx";
import Summary from "./sections/homePage/Summary.tsx";
import Certificates from "./sections/homePage/Certificates.tsx";

function HomePage() {
    const { setBgImageSrc, setPageTitle } = useOutletContext<{
        setBgImageSrc: (src: string) => void,
        setPageTitle: (title: string) => void,
    }>();

    useEffect(() => {
        setBgImageSrc(newApartment);
        setPageTitle("Perfect Space");
    }, []);

    return (
        <>
            <Offers />
            <RealisationsExample />
            <Summary />
            <Certificates />
        </>
    );
}

export default HomePage;