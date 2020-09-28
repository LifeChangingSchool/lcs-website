import Link from "next/link";
import LanderRedContainer from "./lander-red-container";
import {useEffect, useState} from "react";

export default function LanderCost() {
    const calculateTimeLeft = (): {days: number, hours: number, minutes: number, seconds: number} => {
        let difference = +new Date("2020-10-04T23:59:59-04:00") - +new Date();
        let timeLeft = null;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
            console.log("update");
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <LanderRedContainer className="my-12">
            <div className="lcs-container text-center">
                <h2 className="lcs-uppercase-bold mb-4">Program Cost</h2>
                <p className="text-6xl font-bold leading-none">
                    <s className="opacity-25">$1500</s> <span className="lcs-text-yellow">$900</span>
                </p>
                <p className="max-w-lg mx-auto my-4 text-xs sm:text-base"><b>Save 40%</b> by enrolling in our October
                    2020 session
                    compared to the cost of previous in-person sessions. Get the same top-quality instruction,
                    mentorship, and networking.</p>
                <p className="my-4 text-xs sm:text-base"><b>Apply by October 4th for an <span className="lcs-text-yellow">extra $150 off.</span></b></p>
                <Link href="/interest"><a className="lcs-cta-button lcs-bg-yellow my-4 sm:text-xl">Apply now and save
                    40%</a></Link>
                {timeLeft && (<p className="my-4 text-xs sm:text-base lcs-text-yellow font-bold">Time left: {`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds`}</p>)}
            </div>
        </LanderRedContainer>
    );
}