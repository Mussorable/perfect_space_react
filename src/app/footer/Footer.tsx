import FooterBottom from "./FooterBottom.tsx";
import FooterTop from "./FooterTop.tsx";

function Footer() {
    return (
        <footer className="pt-8 lg:pt-20 pb-4 orange-gradient mt-12">
            <div className="container mx-auto px-4">
                <FooterTop/>
                <FooterBottom/>
            </div>
        </footer>
);
}

export default Footer;