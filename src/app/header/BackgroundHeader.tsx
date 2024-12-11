import { useEffect, useRef, useState } from "react";

interface BackgroundHeaderProps {
    bgImageSrc: string;
    pageTitle: string;
}

function BackgroundHeader({bgImageSrc, pageTitle}: BackgroundHeaderProps) {
    const component = useRef<HTMLDivElement | null>(null);
    const [visible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }, { threshold: 0.3 }
        );

        if (component.current) observer.observe(component.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={component}
            className="bg-center relative h-[70vh] m-0 p-0 border-0 overflow-hidden bg-cover flex items-center bg-no-repeat bg-gray-700
                       after:block after:absolute after:z-[1] after:w-full after:h-full after:left-0 after:top-0 after:content-[''] after:shadow-gradient"
            style={{backgroundImage: `url(${bgImageSrc})`}}>
            <div className="relative container mx-auto z-[2]">
                <div>
                    <div className="mx-auto">
                        <div className="text-white text-center">
                            <h1 className="text-8xl font-semibold text-shadow">{ pageTitle }</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-1/3">
                        <div className={ `text-shadow transition delay-100 ease-in opacity-0 translate-x-1/4 ${ visible ? 'opacity-100 !translate-x-0' : ''}` }>
                            <p className="text-6xl text-orange my-0 font-semibold leading-none">Swift and Reliable</p>
                            <p className="text-5xl text-gray-300 my-0 font-semibold ml-[25px]">Quality</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default BackgroundHeader;