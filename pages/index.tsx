import Link from "next/link";
import LanderCTA from "../components/lander-cta";
import LanderFAQ from "../components/lander-faq";
import FAQ from "../content/faq.json";
import LanderRedContainer from "../components/lander-red-container";
import LCSSEO from "../lib/seolib";
import matter from "gray-matter";
import Accordion from "react-robust-accordion";
import ReactMarkdown from "react-markdown";
import LanderTestimonials from "../components/lander-testimonials";
import LanderGrid from "../components/lander-grid";
import LanderCost from "../components/lander-cost";

export default function Home({courseContent}) {
    return (
        <main className="lcs-container sm:pt-16">
            <LCSSEO title="" description=""/>
            <h1 className="my-8 heading md:text-5xl" style={{
                lineHeight: 1.0,
            }}>
                <span className="text-black">Launch a business.</span><br/>
                <span className="lcs-text-red">Become an entrepreneur.</span><br/>
                <span className="lcs-text-yellow">Change your life.</span><br/>
            </h1>
            <p className="md:text-xl max-w-2xl my-8">LCS is a virtual <b>entrepreneurship program</b> and <b>startup
                incubator</b> for <b>high school students</b>, no prior experience required. Run by Cornell University
                members
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
            <LanderCTA className="my-12"/>
            <div className="md:flex items-end">
                <div className="md:mr-8">
                    <h2 className="heading text-2xl lg:text-3xl max-w-md my-8">Training high schoolers to become the
                        next generation of
                        entrepreneurs</h2>
                    <p>We select up to 50 of the top high school students around the world and provide them with the
                        education and platform to launch sustainable, impactful startups in just six weeks.</p>
                </div>
                <div className="md:max-w-sm mt-8">
                    <img src="/img/lander2.jpg" alt="Photo from LCS final presentation"/>
                </div>
            </div>
            <div className="my-12">
                <div className="-mx-2 flex justify-around">
                    {Array.apply(0, Array(6)).map((_, i) => (
                        <div className={`mx-1 rounded-full w-full ${i >= 2 ? "lcs-bg-yellow" : "lcs-bg-red"} h-2`}
                             key={i}/>
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

            <LanderGrid/>

            <hr className="my-16"/>

            <LanderTestimonials/>

            <LanderCost/>

            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="mt-8 md:mt-0 md:mr-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                    <h2 className="heading text-2xl lg:text-3xl mb-6">Launch a startup in six weeks</h2>
                    <p className="content">We'll use no-code tools and teach you the ins-and-outs of entrepreneurship
                        and startups, from <b>customer discovery to getting funding.</b> Create a business plan, build
                        an MVP,
                        and <b>launch a real startup using the Lean startup methodology</b> in only 6 weeks.</p>
                    <a href="#lander-section-course" className="lcs-outline-button mt-6">Program overview &gt;</a>
                </div>
                <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                    <img src="/img/lander3.jpg" alt="Photo from a 2015 session of Life Changing School"/>
                </div>
            </div>

            <hr className="my-16"/>

            <div className="md:flex items-center">
                <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                    <img src="/img/startuptree-interface.png"
                         alt="Screenshot of StartupTree, the fastest-growing network for entrepreneurship students"/>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                    <h2 className="heading text-2xl lg:text-3xl mb-6">Join the entrepreneurship community</h2>
                    <p className="content">Get lifetime access to StartupTree, the <b>fastest-growing network for
                        entrepreneurship students.</b> Access mentorship, competitions, jobs, and even funding from a
                        network of 200,000+ entrepreneurs, with <b>alumni from Yale, Columbia, Cornell, and 100+ other
                            institutions.</b></p>
                    <a href="https://join.startuptree.co/" className="lcs-outline-button mt-6">More about
                        StartupTree &gt;</a>
                </div>
            </div>

            <hr className="my-16"/>

            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="mt-8 md:mt-0 md:mr-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                    <h2 className="heading text-2xl lg:text-3xl mb-6">Gain the experience you need to succeed in college
                        and beyond</h2>
                    <p className="content">Put yourself ahead of the competition by building world-class leadership,
                        communication, and design skills. Work on something you're truly passionate about, and <b>make a
                        real impact.</b> Learn from <b>one-on-one mentorship with Cornell University members and top
                        serial entrepreneurs.</b>
                    </p>
                </div>
                <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                    <img src="/img/lander4.jpg" alt="Photo from a 2015 session of Life Changing School"/>
                </div>
            </div>

            <hr className="sep"/>

            <LanderCost/>

            <h2 className="heading mb-4">Our Team</h2>

            <p className="mb-8">The virtual Life Changing School Program is run by an incredible team of Cornell
                University members who have 12+ years of experience with launching ventures and guiding entrepreneurs.
                Our experienced Cornell members will build the same strong, life changing virtual summer program for our
                students.</p>

            {/*<div className="sm:flex sm:flex-wrap">*/}
            {/*    {*/}
            {/*        Team.team.map((item, i) => (*/}
            {/*            <div className="sm:w-1/2 lg:w-1/4 text-center px-4">*/}
            {/*                <div>*/}
            {/*                    <img className="rounded-full w-32 inline" src={item.headshot}*/}
            {/*                         alt={`Headshot of LCS ${item.title} ${item.name}`}/>*/}
            {/*                    <h3 className="label mt-4">{item.name}</h3>*/}
            {/*                    <p className="support my-1">{item.title}</p>*/}
            {/*                    <p className="support text-gray-500 my-1">{item.shortbio}</p>*/}
            {/*                </div>*/}
            {/*                {*/}
            {/*                    i === Team.team.length - 1 ? "" :*/}
            {/*                        i === Team.team.length - 2 ? <hr className="sm:hidden"/> : <hr className="lg:hidden"/>*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="mt-12 text-center">
                <Link href="/about"><a className="lcs-outline-button">More about our team &gt;</a></Link>
            </div>

            <hr className="my-12"/>

            <div className="md:grid md:grid-cols-2">
                <div className="md:pb-0 md:border-b-0 md:pr-6 md:border-r">
                    <h2 className="heading mb-4" id="lander-section-course">What's in the course</h2>
                    {courseContent.map((item, i) =>
                        <div key={i}>
                            <Accordion label={(
                                <h3 className="font-bold">{item.title}</h3>
                            )} className="p-4 border" open={true}>
                                <div className="content mt-4">
                                    <ReactMarkdown source={item.markdownBody}/>
                                </div>
                            </Accordion>
                        </div>
                    )}
                </div>
                <hr className="md:hidden"/>
                <div className="md:pb-0 md:border-b-0 md:pl-6">
                    <h2 className="heading mb-4" id="lander-section-faq">FAQs</h2>
                    {FAQ.faq.map((f, i) =>
                        <div key={i}>
                            <LanderFAQ question={f.question} answer={f.answer}/>
                        </div>
                    )}
                </div>
            </div>
            <hr className="sep"/>
        </main>
    )
}

export async function getStaticProps() {
    const courseContent = ((context) => {
        const keys = context.keys();
        const values = keys.map(context);
        let data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value: any = values[index];
            const document = matter(value.default);
            return {
                title: document.data.title,
                markdownBody: document.content,
                slug
            };
        });
        data.sort((a, b) => a.title < b.title ? -1 : 1);
        return data;
    })(require.context("../content/course-content", true, /\.md$/));

    return {props: {courseContent}};
}