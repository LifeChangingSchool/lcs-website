import Link from "next/link";
import LanderRedContainer from "./lander-red-container";

export default function LanderCTA(){
    return (
        <LanderRedContainer>
            <div className="lcs-container lcs-lander-grid">
                <div className="lcs-uppercase-bold col-span-2 mb-4 sm:col-span-1 sm:mb-0">
                    <span>October 2020 Session</span>
                </div>
                <div className="col-span-2">
                    <p>Our October 2020 session will run from October 5, 2020 to November 16, 2020. <b>The deadline to apply is September 30, 2020.</b> The program tuition is $900.</p>
                    <Link href="/apply"><a className="lcs-cta-button w-full lcs-bg-yellow my-4">Apply for October 2020</a></Link>
                </div>
            </div>
        </LanderRedContainer>
    )
}