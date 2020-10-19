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
import LanderSpeakers from "../components/lander-speakers";
import LanderBar from "../components/lander-bar";
import LanderFeatures from "../components/lander-features";
import LanderSupportedBy from "../components/lander-supported-by";

export default function Home({courseContent}) {
    return (
        <main className="lcs-container sm:pt-16">
            <LCSSEO title="" description=""/>
            <h1 className="my-8 heading md:text-5xl" style={{
                lineHeight: 1.0,
            }}>
                <span className="text-black">Launch a startup.</span><br/>
                <span className="lcs-text-red">Become an entrepreneur.</span><br/>
                <span className="lcs-text-yellow">Change your life.</span><br/>
            </h1>
            <p className="max-w-2xl mt-8 leading-relaxed">Three times a year, LCS selects the <b>top high school students around the world</b> for
                our <b>virtual startup incubator and entrepreneurship program,</b> providing them with the education and platform to <b>launch sustainable, impactful startups in just six
                weeks.</b></p>
            <p className="max-w-2xl mt-4 mb-8">No prior experience required. Run by Cornell University members with years of entrepreneurship experience.</p>
            <Link href="/interest"><a className="lcs-cta-button">Get notified about sessions</a></Link>

            <hr className="my-12"/>
            <h2 className="lcs-uppercase-bold">Fall 2020 guest speakers</h2>
            <LanderSpeakers/>

            <hr className="my-12"/>
            <h2 className="lcs-uppercase-bold">Hear from past students</h2>
            <LanderTestimonials/>

            <LanderCTA className="mt-12"/>

            <LanderFeatures/>

            {/*<LanderCost/>*/}

            <hr className="sep"/>

            <LanderGrid/>

            <hr className="my-16"/>

            <LanderSupportedBy/>

            <hr className="my-16"/>

            <h2 className="heading mb-4">Training high schoolers to become the next generation of entrepreneurs</h2>

            <p className="mb-8">The virtual Life Changing School Program is run by an incredible team of Cornell
                University members who have 12+ years of experience with launching ventures and guiding entrepreneurs.
                Our experienced Cornell members will build the same strong, life changing virtual summer program for our
                students.</p>

            <div className="mt-12 text-center">
                <Link href="/about"><a className="lcs-outline-button">More about our team &gt;</a></Link>
            </div>

            {/*<LanderCost/>*/}

            <LanderCTA className="my-16"/>

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