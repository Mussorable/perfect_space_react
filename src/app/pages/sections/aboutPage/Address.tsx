import Section from "../Section.tsx";
import placeholderUrl from "../../../../assets/svg/placeholder.svg";
import qrUrl from "../../../../assets/svg/qr.svg";
import mapUrl from "../../../../assets/svg/map.svg";
import mailUrl from "../../../../assets/svg/mail.svg";
import phoneUrl from "../../../../assets/svg/address-phone.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Address() {
    const component = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const firmPosition: LngLatLike = [18.566720, 51.205370];

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: firmPosition,
            zoom: 13
        });

        const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3 class="font-semibold text-xl text-center block">Perfect Space</h3>
                <p>Graniczna 14 str., 98-300 Gaszyn</p>
            `)
            .setMaxWidth("200px");

        const marker = new mapboxgl.Marker({ color: "#333" })
            .setLngLat(firmPosition)
            .setPopup(popup)
            .addTo(map);

        marker.togglePopup();

        return () => map.remove();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }, { threshold: 0.5 }
        );

        if (component.current) observer.observe(component.current);

        return () => observer.disconnect();
    }, []);

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    return (
        <Section>
            <div ref={component} className={ `flex flex-wrap justify-center gap-4 opacity-0 transition-all duration-[500ms] ease-out translate-y-[100px] ${ isVisible ? "opacity-100 translate-y-0" : "" }` }>
                <div className="w-4/12 option-raised hover:cloud-hover">
                    <img src={placeholderUrl} className="inline-block absolute left-[-29%] -z-[1]" alt="Location icon"/>
                    <div className="pl-6">
                        <h4 className="text-4xl my-4 font-semibold">Address:</h4>
                        <div className="text-xl text-dark *:block *:my-1">
                            <p className="mb-0 items-center flex font-bold"><img className="inline-block mr-1" src={mapUrl} alt="map icon"/>Graniczna 14 str., 98-300 Gaszyn</p>
                            <a href="mailto:contact@perfect-space.pl"><img className="inline-block mr-1" src={mailUrl} alt="map icon"/>contact@perfect-space.pl</a>
                            <a href="tel:+48723569435"><img className="inline-block mr-1" src={phoneUrl} alt="map icon"/>+48 723 569 435</a>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <img className="inline-block align-middle" src={qrUrl} alt="QR Code"/>
                    </div>
                    <div className="mt-4 text-center mb-10">
                        <Link className="font-normal hover:button-hover-box cursor-pointer px-8 py-1.5 text-xl rounded-md text-center transition delay-[30] text-dark bg-orange hover:bg-light-orange" to="/contact">Contact us</Link>
                    </div>
                </div>
                <div className="w-6/12 option-raised border-2 hover:cloud-hover border-dark">
                    <div id="map" className="h-full"></div>
                </div>
            </div>
        </Section>
    )
}

const script = document.createElement("script");
script.src = "https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.js";
// script.async = true;
// script.defer = true;
document.body.appendChild(script);

export default Address;