import {ReactNode} from "react";

export default function LanderRedContainer(props: {children: ReactNode}){
    return (
        <div className="relative lcs-bg-red py-6 my-12" style={{
            width: "100vw",
            left: "calc(50% - 50vw)"
        }}>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}