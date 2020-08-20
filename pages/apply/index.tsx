import {useEffect, useState} from "react";
import {useAuth} from "../../lib/authlib";
import {useRouter} from "next/router";
import Accordion from "react-robust-accordion";

export default function ApplyIndex() {
    const auth = useAuth();
    const router = useRouter();
    const [openSection, setOpenSection] = useState<number>(0);

    useEffect(() => {
        if (!auth.user) {
            router.push("/apply/login");
        }
    }, []);

    return (
        <div className="flex items-stretch">
            <div className="w-64 border-r -mt-8 pt-8 flex-shrink-0">
                <p className="supra mb-4">Application steps</p>
                <div>
                    <p className={`portal my-1 ~info ${openSection === 0 ? "active" : ""}`}
                       onClick={() => setOpenSection(0)}>Basic info</p>
                </div>
                <div>
                    <p className={`portal my-1 ~info ${openSection === 1 ? "active" : ""}`}
                       onClick={() => setOpenSection(1)}>Written response</p>
                </div>
                <hr/>
                <p className="supra mb-4">Application status</p>
                <p className={`portal my-1 ~info ${openSection === 2 ? "active" : ""}`}
                   onClick={() => setOpenSection(2)} disabled>Check status</p>
            </div>
            <div className="w-full ml-8">
                {{
                    0: (
                        <>
                            <h1 className="heading">Basic info</h1>
                            <hr/>
                            <form action="">
                                <label className="label">First and last name</label>
                                <input type="text" className="field"/>
                                <label className="label">Phone number</label> {/* maybe use that nice phone number package */}
                                <input type="text" className="field"/>
                                <label className="label">Are you a student?</label>
                                <div>
                                    <label className="switch mr-4">
                                        <input type="radio" name="isStudent" className="mr-2"/>
                                        <span>Yes</span>
                                    </label>
                                    <label className="switch mr-4">
                                        <input type="radio" name="isStudent" className="mr-2"/>
                                        <span>No</span>
                                    </label>
                                </div>
                                <hr/>
                                <label className="label">How did you hear about LCS?</label>
                                <div>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>School</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>Friends</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>Instagram</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>Facebook</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>Parents</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>LCS Alumni</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2"/>
                                        <span>LCS Mentor</span>
                                    </label>
                                </div>
                                <hr/>
                                <label className="label">If you have a referral code, enter it below</label>
                                <input type="text" className="field"/>
                            </form>
                            <hr/>
                            <div className="flex justify-end mb-8">
                                <button className="button ~neutral !normal ml-4">Save</button>
                                <button className="button ~urge !high ml-4">Submit basic info</button>
                            </div>
                        </>
                    ), 1: (
                        <>
                            <h1 className="heading">Written response</h1>
                            <hr/>
                            <label className="label">Tell about a successful startup that you find cool. What do you think makes them successful?</label>
                            <div className="my-4">
                                <textarea className="textarea field resize-none" rows={12}/>
                            </div>
                            <label className="label">What is your biggest weakness and what have you done to overcome it?</label>
                            <div className="my-4">
                                <textarea className="textarea field resize-none" rows={12}/>
                            </div>
                            <label className="label">Do you have any prior experience with entrepreneurship? Tell us if you've built anything in the past! (optional)</label>
                            <div className="my-4">
                                <textarea className="textarea field resize-none" rows={12}/>
                            </div>
                            <label className="label">What makes you a good fit for LCS and why do you want to take part in this program?</label>
                            <div className="my-4">
                                <textarea className="textarea field resize-none" rows={12}/>
                            </div>
                            <hr/>
                            <div className="flex justify-end mb-8">
                                <button className="button ~neutral !normal ml-4">Save</button>
                                <button className="button ~urge !high ml-4">Submit basic info</button>
                            </div>
                        </>
                    ), 2: (
                        <>
                            <h1 className="heading">Check status</h1>
                            <hr/>
                        </>
                    )
                }[openSection]}

            </div>
        </div>
    )
}