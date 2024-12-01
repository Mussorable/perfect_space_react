import BackgroundHeader from "./header/BackgroundHeader.tsx";
import Header from "./header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.tsx";
import { useEffect, useState } from "react";
import calmApartment from "../assets/realisations/calm-apartment.webp";

function Layer() {
    const [bgImageSrc, setBgImageSrc] = useState(calmApartment);
    const [pageTitle, setPageTitle] = useState("Perfect Space");

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle, bgImageSrc]);

    return (
        <>
            <Header />
            <BackgroundHeader bgImageSrc={bgImageSrc} pageTitle={pageTitle} />
            <div
                className="mt-[-60px] mr-[60px] mb-0 ml-[60px] rounded-[6px] box-raised bg-white relative z-[3]">
                <Outlet context={{ setBgImageSrc, setPageTitle }} />
            </div>
            <Footer />
        </>
    );
}

export default Layer;