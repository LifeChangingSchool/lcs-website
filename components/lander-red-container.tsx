import {ReactNode} from "react";

export default function LanderRedContainer(props: {children: ReactNode, className?: string}){
    return (
        <div className={`lcs-full-width lcs-bg-red py-6 ${props.className}`}>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}