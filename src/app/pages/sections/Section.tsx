import { ReactNode } from "react";

interface SectionProps {
    children?: ReactNode;
    className?: string;
}

function Section({ className, children }: SectionProps) {
    return (
        <div className={`py-16 bg-cover bg-center ${className || ""}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Section;