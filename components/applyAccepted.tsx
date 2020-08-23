import {useEffect} from "react";
import ConfettiGenerator from "confetti-js";

export default function ApplyAccepted(){
    useEffect(() => {
        const confettiSettings = { target: "confetti-backdrop", width: 1200, height: 400 };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => {confetti.clear()};
    });

    return (
        <div className="w-full relative">
            <div className="z-10 py-8 relative text-center max-w-lg mx-auto">
                <h2 className="heading">Congratulations!</h2>
                <p className="my-4">Your application to Life Changing School has been accepted!</p>
                <button className="button button-big ~urge !high">Pay now to confirm your spot</button>
                <p className="support">
                    Not ready yet? Learn more about our program, curriculum, and mentors, or explore past student startups.
                    Please don't hesitate to reach out to us at hello@lifechangingschool.org if you have any questions!
                </p>
            </div>
            <canvas id="confetti-backdrop" className="w-full h-full absolute top-0 z-0"/>
        </div>
    )
}