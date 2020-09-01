import {ReactNode} from "react";

export default function LanderRedContainer(props: {children: ReactNode, className?: string}){
    return (
        <div className={`relative lcs-bg-red py-6 ${props.className}`} style={{
            width: "100vw",
            left: "calc(50% - 50vw)"
        }}>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}