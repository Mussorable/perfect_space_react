import BackgroundHeader from "./header/BackgroundHeader.tsx";
import Header from "./header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.tsx";
import { MouseEvent, useEffect, useState } from "react";
import calmApartment from "../assets/realisations/calm-apartment.webp";
import Lightbox from "./Lightbox.tsx";

function Layer() {
    const [bgImageSrc, setBgImageSrc] = useState(calmApartment);
    const [pageTitle, setPageTitle] = useState("Perfect Space");
    const [highlightedImg, setHighlightedImg] = useState<string | null>(null);

    const handleOpenImage = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget.lastChild as HTMLImageElement;
        if (target) setHighlightedImg(target.src);
    };

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle, bgImageSrc]);

    return (
        <>
            <Header />
            <BackgroundHeader bgImageSrc={bgImageSrc} pageTitle={pageTitle} />
            <div
                className="mt-[-60px] lg:mx-[60px] mb-0 rounded-[6px] box-raised bg-white relative z-[3]">
                <Outlet context={{ setBgImageSrc, setPageTitle, handleOpenImage }} />
            </div>
            <Lightbox imgUrl={highlightedImg} handleOnClick={setHighlightedImg} />
            <Footer />
        </>
    );
}

export default Layer;