import Link from "next/link";
import LanderRedContainer from "./lander-red-container";

const LanderCost = () => (
    <LanderRedContainer className="my-12">
        <div className="lcs-container text-center">
            <h2 className="lcs-uppercase-bold mb-4">Program Cost</h2>
            <p className="text-6xl font-bold leading-none">
                <s className="opacity-25">$1500</s> <span className="lcs-text-yellow">$900</span>
            </p>
            <p className="max-w-lg mx-auto my-4 text-xs sm:text-base"><b>Save 40%</b> by enrolling in our October 2020 session
                compared to the cost of previous in-person sessions. Get the same top-quality instruction,
                mentorship, and networking.</p>
            <Link href="/interest"><a className="lcs-cta-button lcs-bg-yellow my-4 sm:text-xl">Apply now and save
                40%</a></Link>
        </div>
    </LanderRedContainer>
)

export default LanderCost;