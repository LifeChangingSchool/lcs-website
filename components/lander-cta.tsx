import Link from "next/link";
import LanderRedContainer from "./lander-red-container";

export default function LanderCTA(props: {className?: string}){
    return (
        <LanderRedContainer className={props.className}>
            <div className="lcs-container lcs-lander-grid">
                <div className="lcs-uppercase-bold col-span-2 mb-4 sm:col-span-1 sm:mb-0">
                    <span>October 2020 Session</span>
                </div>
                <div className="col-span-2">
                    <p className="text-xs sm:text-base">Applications to the Fall 2020 session of LCS are now closed. We will have sessions in the spring and winter.</p>
                    <Link href="/interest"><a className="lcs-cta-button text-xs sm:text-base w-full lcs-bg-yellow my-4">Get notified about future sessions</a></Link>
                </div>
            </div>
        </LanderRedContainer>
    )
}
