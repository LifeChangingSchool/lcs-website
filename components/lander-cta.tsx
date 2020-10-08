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
                    <p className="text-xs sm:text-base"><b>The deadline to apply is approaching!</b> Early deadline for $100 off: <b>October 11 at 11:59 PM EST.</b> Final deadline: <b>October 18 at 11:59 PM EST.</b> The session will begin on October 26.</p>
                    <Link href="/interest"><a className="lcs-cta-button text-xs sm:text-base w-full lcs-bg-yellow my-4">Apply for October 2020</a></Link>
                </div>
            </div>
        </LanderRedContainer>
    )
}
