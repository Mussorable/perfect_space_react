import { ReactNode } from "react";

interface SectionProps {
    children?: ReactNode;
}

function Section({ children }: SectionProps) {
    return (
        <div className="py-16 bg-cover bg-center">
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Section;