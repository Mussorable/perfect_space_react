import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import newApartment from "../../assets/realisations/new_apartment.webp";

function HomePage() {
    const { setBgImageSrc } = useOutletContext<{ setBgImageSrc: (src: string) => void }>();

    useEffect(() => {
        setBgImageSrc(newApartment);
    }, []);

    return (
        <>
            <h1>Home Page</h1>
        </>
    );
}

export default HomePage;