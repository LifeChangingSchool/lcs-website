import Testimonials from "../content/testimonials.json";
import LanderTestimonial from "./lander-testimonial";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useRef} from "react";

export default function LanderTestimonials() {
    const scrollRef = useRef(null);

    function scroll(dir: boolean){
        scrollRef.current.scrollBy({
            top: 0,
            left: dir ? +430 : -430,
            behavior: "smooth"
        });
    }

    return (
        <>
            <h2 className="heading">Hear from students/alumni and parents</h2>
            <div className="overflow-auto" ref={scrollRef}>
                <div className="grid md:grid-rows-2 grid-flow-col gap-x-6">
                    {Testimonials.testimonials.map((t, i) => (
                        <div key={i}>
                            <LanderTestimonial name={t.name} title={t.title} imgPath={t.headshot} text={(
                                <>
                                    <p>{t.message}</p>
                                    <p className="italic">{t.note}</p>
                                </>
                            )} borderRight={true}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mt-4">
                <button className="hover:bg-gray-300 p-4 border ml-auto" onClick={() => scroll(false)}><FaArrowLeft/></button>
                <button className="hover:bg-gray-300 p-4 border" onClick={() => scroll(true)}><FaArrowRight/></button>
            </div>
        </>
    );
}