import {ReactNode} from "react";

export default function LanderTestimonial(props: { name: string, title: string, imgPath: string, text: string | ReactNode, borderRight?: boolean}) {
    return (
        <div className={`w-full my-8 pb-6 border-b md:pb-0 md:border-b-0 ${props.borderRight ? "md:pr-6 md:border-r" : ""}`}>
            <div className="flex items-center">
                <div className="w-16 mr-4">
                    <img className="rounded-full" src={props.imgPath} alt={`Headshot of ${props.name}, ${props.title}`}/>
                </div>
                <div>
                    <div className="font-accent font-bold"><span>{props.name}</span></div>
                    <div><span>{props.title}</span></div>
                </div>
            </div>
            <div className="content text-gray-700 mt-4 text-xs md:text-base opacity-50">
                {props.text}
            </div>
        </div>
    )
}