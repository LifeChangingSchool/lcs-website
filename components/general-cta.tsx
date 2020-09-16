import Link from "next/link";

const GeneralCTA = (props: {className?: string, blog?: boolean}) => (
    <div className={`py-6 relative bg-gray-100 ${props.className}`} style={{
        width: "100vw",
        left: "calc(50% - 50vw)"
    }}>
        <div className="container">
            <div className="lcs-container">
                {props.blog && (
                    <>
                        <p>Enjoy our blog posts? Consider applying to LCS's online entrepreneurship program for high schoolers.</p>
                        <hr/>
                    </>
                )}
                <h3 className="my-8 heading md:text-3xl" style={{
                    lineHeight: 1.0,
                }}>
                    <span className="text-black">Launch a business.</span><br/>
                    <span className="lcs-text-red">Become an entrepreneur.</span><br/>
                    <span className="lcs-text-yellow">Change your life.</span><br/>
                </h3>
                <p className="max-w-2xl my-8 opacity-50">LCS is a virtual six-week <b>entrepreneurship program and
                    incubator</b> for high school students, no prior experience required. Run by Cornell University members
                    with years of entrepreneurship experience.</p>
                <div className="md:flex">
                    <Link href="/"><a className="lcs-cta-button w-full md:w-64 md:mr-4 lcs-bg-red my-2">Learn more</a></Link>
                    <Link href="/interest"><a className="lcs-cta-button w-full md:w-64 md:mr-4 lcs-bg-yellow my-2">Apply Now</a></Link>
                </div>
            </div>
        </div>
    </div>
)

export default GeneralCTA;