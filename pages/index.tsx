import Head from 'next/head'
import Link from "next/link";
import LanderCTA from "../components/lander-cta";
import {FaArrowLeft, FaArrowRight, FaBook, FaChalkboardTeacher, FaRocket, FaToolbox, FaUserCheck} from "react-icons/fa";
import LanderTestimonial from "../components/lander-testimonial";
import LanderFAQ from "../components/lander-faq";
import Testimonials from "../content/testimonials.json";
import FAQ from "../content/faq.json";

export default function Home() {

    return (
        <div className="lcs-container sm:pt-16">
            <Head>
                <title>Life Changing School</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className="my-8 heading md:text-5xl" style={{
                lineHeight: 1.0,
            }}>
                <span className="text-black">Launch a business.</span><br/>
                <span className="lcs-text-red">Become an entrepreneur.</span><br/>
                <span className="lcs-text-yellow">Change your life.</span><br/>
            </h1>
            <p className="md:text-xl max-w-2xl my-8">LCS is a virtual six-week <b>entrepreneurship program and
                incubator</b> for high school students, no prior experience required. Run by Cornell University members
                with years of entrepreneurship experience.</p>
            <Link href="/apply"><a className="lcs-cta-button">Apply for October 2020</a></Link>
            <img className="my-8" src="/img/lander1.jpg" alt="LCS hero image"/>
            <hr className="lg:my-16"/>
            <div className="lg:flex items-center">
                <div className="lcs-uppercase-bold"><span>Supported by</span></div>
                <div className="h-5 my-4 lg:ml-auto lg:my-0">
                    <img src="/img/support1-eship.png" alt="Entrepreneurship at Cornell Logo" className="h-full"/>
                </div>
                <div className="h-5 my-4 lg:ml-8 lg:my-0">
                    <img src="/img/support2-lcl.png" alt="Life Changing Labs Logo" className="h-full"/>
                </div>
                <div className="h-5 my-4 lg:ml-8 lg:my-0">
                    <img src="/img/support3-startuptree.png" alt="StartupTree Logo" className="h-full"/>
                </div>
            </div>
            <LanderCTA/>
            <div className="md:flex items-end">
                <div className="md:mr-8">
                    <h2 className="heading text-2xl lg:text-3xl max-w-md my-8">Training high schoolers to become the next generation of
                        entrepreneurs</h2>
                    <p>We select up to 50 of the top high school students around the world and provide them with the education and platform to launch sustainable, impactful startups in just six weeks.</p>
                </div>
                <div className="md:max-w-sm mt-8">
                    <img src="/img/lander2.jpg" alt="Photo from LCS final presentation"/>
                </div>
            </div>
            <div className="my-12">
                <div className="-mx-2 flex justify-around">
                    {Array.apply(0, Array(6)).map((_, i) => (
                        <div className={`mx-1 rounded-full w-full ${i >= 2 ? "lcs-bg-yellow" : "lcs-bg-red"} h-2`} key={i}/>
                    ))}
                </div>
                <div className="sm:flex mt-2">
                    <div className="lcs-uppercase-bold">
                        <span>2 Week </span>
                        <span className="lcs-text-red">Eship intensive</span>
                    </div>
                    <div className="lcs-uppercase-bold ml-auto">
                        <span>4 Week </span>
                        <span className="lcs-text-yellow">Startup incubator</span>
                    </div>
                </div>
            </div>
            <div className="lcs-lander-grid">
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-red">
                        <FaBook/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">Rigorous curriculum</h3>
                    <p className="text-xs">Learn everything you need to know about the eship process, from customer discovery to getting funding.</p>
                </div>
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-red">
                        <FaRocket/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">Launch a real company</h3>
                    <p className="text-xs">Create a business plan, build an MVP, and launch a real startup using the Lean startup methodology.</p>
                </div>
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-green">
                        <img src="/img/startuptree.png" alt="StartupTree Logo" className="w-4"/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">Premier network</h3>
                    <p className="text-xs">Network with top entrepreneurs and students at weekly workshops and on StartupTree.</p>
                </div>
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-red">
                        <FaChalkboardTeacher/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">Live lessons and workshops</h3>
                    <p className="text-xs">Work with peers, instructors, and guest experts in live Zoom sessions.</p>
                </div>
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-red">
                        <FaUserCheck/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">1-on-1 mentorship</h3>
                    <p className="text-xs">You'll be directly supported by a personal mentor as you learn and build your business.</p>
                </div>
                <div className="lcs-grid-item">
                    <div className="shield lcs-bg-red">
                        <FaToolbox/>
                    </div>
                    <h3 className="font-accent font-bold text-lg my-2 leading-5">No prior experience required</h3>
                    <p className="text-xs">We'll use no-code tools and teach you everything you need to know.</p>
                </div>
            </div>
            <hr className="my-16"/>
            <h2 className="heading">Hear from alumni and parents</h2>
            <div className="md:grid md:grid-cols-2 md:gap-x-6">
                {Testimonials.testimonials.map(t => (
                    <LanderTestimonial name={t.name} title={t.title} imgPath={t.headshot} text={(
                        <>
                            <p>{t.message}</p>
                            <p className="italic">{t.note}</p>
                        </>
                    )}/>
                ))}
            </div>
            <div className="flex">
                <button className="hover:bg-gray-300 p-4 border ml-auto"><FaArrowLeft/></button>
                <button className="hover:bg-gray-300 p-4 border"><FaArrowRight/></button>
            </div>
            <LanderCTA/>
            <div className="md:grid md:grid-cols-2">
                <div className="md:pb-0 md:border-b-0 md:pr-6 md:border-r">
                    <h2 className="heading mb-4">What's in the course</h2>
                </div>
                <hr className="md:hidden"/>
                <div className="md:pb-0 md:border-b-0 md:pl-6">
                    <h2 className="heading mb-4">FAQs</h2>
                    {FAQ.faq.map(f =>
                        <LanderFAQ question={f.question} answer={f.answer}/>
                    )}
                </div>
            </div>
        </div>
    )
}
