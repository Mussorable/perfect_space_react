interface LightboxProps {
    imgUrl?: string | null;
    handleOnClick: (e: null) => void;
}

function Lightbox({ imgUrl, handleOnClick }: LightboxProps) {
    return (
        <div onClick={() => handleOnClick(null)} className={ `fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-80 overflow-auto pt-24 ${ imgUrl ? "block" : "hidden"}` }>
            <span className="absolute top-4 right-9 text-milk text-5xl cursor-pointer font-bold transition delay-[70ms] hover:text-gray-300">×</span>
            <img src={imgUrl || ""} className="m-auto block max-h-[90%] max-w-[80%]" alt="gallery image full size"/>
        </div>
    );
}

export default Lightbox;