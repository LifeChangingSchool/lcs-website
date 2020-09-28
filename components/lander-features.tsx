const LanderFeatures = () => (
    <>
        <div className="flex items-center flex-col-reverse md:flex-row mt-16">
            <div className="mt-8 md:mt-0 md:mr-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                <h2 className="heading text-lg sm:text-3xl sm:mb-4">Gain the experience you need to succeed in college
                    and beyond</h2>
                <p className="pt-2 text-gray-700 text-xs sm:text-base leading-relaxed">Put yourself ahead of the competition by building world-class leadership,
                    communication, and design skills. Work on something you're truly passionate about, and <b>make a
                        real impact.</b> Learn from <b>one-on-one mentorship with Cornell University members and top
                        serial entrepreneurs.</b>
                </p>
            </div>
            <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                <img src="/img/lander4.jpg" alt="Photo from a 2015 session of Life Changing School"/>
            </div>
        </div>

        <hr className="my-8 sm:my-16"/>

        <div className="md:flex items-center">
            <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                <img src="/img/lander3.jpg" alt="Photo from a 2015 session of Life Changing School"/>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                <h2 className="heading text-lg sm:text-3xl sm:mb-4">Launch a startup in six weeks</h2>
                <p className="pt-2 text-gray-700 text-xs sm:text-base leading-relaxed">We'll use no-code tools and teach you the ins-and-outs of entrepreneurship
                    and startups, from <b>customer discovery to getting funding.</b> Create a business plan, build
                    an MVP,
                    and <b>launch a real startup using the Lean startup methodology</b> in only 6 weeks.</p>
                <a href="#lander-section-course" className="lcs-outline-button mt-6 text-xs sm:text-base">Program overview &gt;</a>
            </div>
        </div>

        <hr className="my-8 sm:my-16"/>

        <div className="flex items-center flex-col-reverse md:flex-row">
            <div className="mt-8 md:mt-0 md:mr-8" style={{flexGrow: 4, flexShrink: 1, flexBasis: 0}}>
                <h2 className="heading text-lg sm:text-3xl sm:mb-4">Access an elite entrepreneurship network</h2>
                <p className="pt-2 text-gray-700 text-xs sm:text-base leading-relaxed">Get lifetime access to StartupTree, the <b>fastest-growing network for
                    entrepreneurship students.</b> Access mentorship, competitions, jobs, and even funding from a
                    network of 200,000+ entrepreneurs, with <b>alumni from Yale, Columbia, Cornell, and 100+ other
                        institutions.</b></p>
                <a href="https://join.startuptree.co/" className="lcs-outline-button mt-6 text-xs sm:text-base">More about
                    StartupTree &gt;</a>
            </div>
            <div style={{flexGrow: 3, flexShrink: 1, flexBasis: 0}}>
                <img src="/img/startuptree-interface.png"
                     alt="Screenshot of StartupTree, the fastest-growing network for entrepreneurship students"/>
            </div>
        </div>
    </>
)

export default LanderFeatures;