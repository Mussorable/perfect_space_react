import BackgroundHeader from "./header/BackgroundHeader.tsx";
import Header from "./header/Header.tsx";

function Layer() {
    return (
        <>
            <Header />
            <BackgroundHeader />
            <div
                className="mt-[-60px] mr-[60px] mb-0 ml-[60px] rounded-[6px] box-raised bg-white relative z-[3]">
            </div>
        </>
    );
}

export default Layer;