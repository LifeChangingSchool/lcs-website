import {useEffect, useState} from "react";
import {useAuth} from "../../lib/authlib";
import {useRouter} from "next/router";
import axios from "axios";
import validator from "validator";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import {FaCheckCircle} from "react-icons/fa";
import LimitedTextarea from "../../components/limited-textarea";

export default function ApplyIndex() {
    const auth = useAuth();
    const router = useRouter();
    const [openSection, setOpenSection] = useState<number>(0);

    const [appID, setAppID] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [justSaved, setJustSaved] = useState<boolean>(false);

    // basic info
    const [submitted1, setSubmitted1] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [channel, setChannel] = useState<string>("");
    const [referralCode, setReferralCode] = useState<string>("");
    const [errors, setErrors] = useState<{
        firstName: boolean,
        lastName: boolean,
        phoneNumber: boolean,
        channel: boolean,
        referralCode: boolean
    }>({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        channel: false,
        referralCode: false
    });
    const [essayError, setEssayError] = useState<boolean>(false);

    // written responses
    const [submitted2, setSubmitted2] = useState<boolean>(false);
    const [essay1, setEssay1] = useState<string>("");
    const [essay2, setEssay2] = useState<string>("");
    const [essay3, setEssay3] = useState<string>("");
    const [essay4, setEssay4] = useState<string>("");

    async function saveSection1(submit: boolean) {
        setJustSaved(false);

        if (!isStudent) return;

        // set errors to false to hide error message
        setErrors({
            firstName: false,
            lastName: false,
            phoneNumber: false,
            channel: false,
            referralCode: false
        });

        // round of error checking
        let newErrors = {
            firstName: false,
            lastName: false,
            phoneNumber: false,
            channel: false,
            referralCode: false
        };

        // validate phone number
        newErrors.phoneNumber = !validator.isMobilePhone(phoneNumber);

        // validate referral code
        // implement later

        // if submitting, check that no fields are empty
        if (submit) {
            if (!firstName) newErrors.firstName = true;
            if (!lastName) newErrors.lastName = true;
            if (!channel) newErrors.channel = true;
        }

        // if any errors, return instead of making API calls
        if (Object.keys(newErrors).some(error => newErrors[error])) {
            setErrors(newErrors);
            return;
        }

        try {
            setIsLoading(true);

            if (submit) console.log(await axios.post("/api/AppOct2020/submitSection1", {
                id: appID,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                channel: channel,
                referralCode: referralCode,
                email: auth.user.attributes.email
            }, {
                headers: {
                    "Authorization": `token ${process.env.NEXT_PUBLIC_API_KEY}`
                }
            }));

            await API.graphql(graphqlOperation(mutations.updateAppOct2020, {
                input: {
                    id: appID,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    channel: channel,
                    referralCode: referralCode,
                    submitted1: submit
                }
            }));

            if (submit) setSubmitted1(true);

            setIsLoading(false);
            setJustSaved(true);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    }

    async function saveSection2(submit: boolean){
        setJustSaved(false);
        setEssayError(false);

        // if any essay is empty
        if (submit && !(essay1 && essay2 && essay3 && essay4)) {
            setEssayError(true);
            return;
        }

        try {
            setIsLoading(true);

            if (submit) console.log(await axios.post("/api/AppOct2020/submitSection2", {
                id: appID,
                essay1: essay1,
                essay2: essay2,
                essay3: essay3,
                essay4: essay4,
                email: auth.user.attributes.email
            }, {
                headers: {
                    "Authorization": `token ${process.env.NEXT_PUBLIC_API_KEY}`
                }
            }));

            await API.graphql(graphqlOperation(mutations.updateAppOct2020, {
                input: {
                    id: appID,
                    essay1: essay1,
                    essay2: essay2,
                    essay3: essay3,
                    essay4: essay4,
                    submitted2: submit
                }
            }));

            if (submit) setSubmitted2(true);

            setIsLoading(false);
            setJustSaved(true);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    }

    function changeSection(i: number) {
        setIsLoading(false);
        setJustSaved(false);
        setEssayError(false);
        setErrors({
            firstName: false,
            lastName: false,
            phoneNumber: false,
            channel: false,
            referralCode: false
        });
        setOpenSection(i);
    }

    useEffect(() => {
        if (!auth.user) {
            router.push("/apply/login");
        }

        async function onLoad() {
            setIsLoading(true);
            const allAppsRes: any = await API.graphql(graphqlOperation(queries.listAppOct2020s));
            const allApps: any[] = allAppsRes.data.listAppOct2020s.items;

            // if no application exists, create one
            if (allApps.length === 0) {
                const newAppRes: any = await API.graphql(graphqlOperation(mutations.createAppOct2020, {
                    input: {
                        submitted1: false,
                        submitted2: false
                    }
                }));
                const newApp: any = newAppRes.data.createAppOct2020;
                await axios.post("/api/AppOct2020/createApplication", {
                    id: newApp.id,
                    email: auth.user.attributes.email
                }, {
                    headers: {
                        "Authorization": `token ${process.env.NEXT_PUBLIC_API_KEY}`
                    }
                });
                setAppID(newApp.id);
                setIsLoading(false);
            } else {
                const currApp = allApps[0];

                setSubmitted1(currApp.submitted1);
                setFirstName(currApp.firstName || "");
                setLastName(currApp.lastName || "");
                setPhoneNumber(currApp.phoneNumber || "");
                setChannel(currApp.channel || "");
                setReferralCode(currApp.referralCode || "");

                setSubmitted2(currApp.submitted2);
                setEssay1(currApp.essay1 || "");
                setEssay2(currApp.essay2 || "");
                setEssay3(currApp.essay3 || "");
                setEssay4(currApp.essay4 || "");

                setAppID(currApp.id);
                setIsLoading(false);
            }
        }

        onLoad();
    }, []);

    return (
        <div className="flex items-stretch">
            <div className="w-64 border-r -mt-8 pt-8 flex-shrink-0">
                <p className="supra mb-4">Application steps</p>
                <div>
                    <button className={`portal my-1 ~info ${openSection === 0 ? "active" : ""}`}
                       onClick={() => changeSection(0)}>
                        {submitted1 && <FaCheckCircle className="mr-2"/>}
                        Basic info
                    </button>
                </div>
                <div>
                    <button className={`portal my-1 ~info ${openSection === 1 ? "active" : ""}`}
                       onClick={() => changeSection(1)} disabled={!submitted1}>
                        {submitted2 && <FaCheckCircle className="mr-2"/>}
                        Written responses
                    </button>
                </div>
                <hr/>
                <p className="supra mb-4">Application status</p>
                <button className={`portal my-1 ~info ${openSection === 2 ? "active" : ""}`}
                   onClick={() => changeSection(2)} disabled={!submitted2}>Check status</button>
            </div>
            <div className="w-full ml-8">
                <h1 className="heading">{{0: "Basic info", 1: "Written responses", 2: "Check status"}[openSection]}</h1>
                <p className="support">{{
                    0: "Submit some basic info to access the second part of the application.",
                    1: "Answer these four short responses in 300 words or less to help us get to know you a bit better.",
                    2: "Check here to see if your application has been accepted."
                }[openSection]}</p>
                <hr/>
                {isLoading && <p className="aside ~info mb-6">Loading...</p>}
                {justSaved && <p className="aside ~positive mb-6">Successfully saved application</p>}
                {Object.keys(errors).some(error => errors[error]) &&
                <p className="aside ~critical mb-6">Fill in all fields with valid values to save or submit.</p>}
                {{
                    0: (
                        <>
                            {submitted1 && <p className="aside ~info">You've already submitted this section of the application and can no longer make any changes.</p>}
                            <form action="">
                                <div className="flex justify-between -mx-2">
                                    <div className="flex-1 mx-2">
                                        <label className="label">First name</label>
                                        <input type="text" className="field" value={firstName} disabled={submitted1}
                                               onChange={e => setFirstName(e.target.value)}/>
                                        {errors.firstName && <p className="support ~critical">Enter your first name</p>}
                                    </div>
                                    <div className="flex-1 mx-2">
                                        <label className="label">Last name</label>
                                        <input type="text" className="field" value={lastName} disabled={submitted1}
                                               onChange={e => setLastName(e.target.value)}/>
                                        {errors.lastName && <p className="support ~critical">Enter your last name</p>}
                                    </div>
                                </div>
                                <label className="label">Phone
                                    number</label> {/* maybe use that nice phone number package */}
                                <input type="text" className="field" value={phoneNumber} disabled={submitted1}
                                       onChange={e => setPhoneNumber(e.target.value)}/>
                                {errors.phoneNumber && <p className="support ~critical">Enter a valid phone number</p>}

                                <hr/>

                                <label className="label">Are you a student?</label>
                                <div>
                                    <label className="switch mr-4">
                                        <input type="radio" name="isStudent" className="mr-2" checked={isStudent}
                                               onChange={e => setIsStudent(e.target.checked)} disabled={submitted1}/>
                                        <span>Yes</span>
                                    </label>
                                    <label className="switch mr-4">
                                        <input type="radio" name="isStudent" className="mr-2" checked={!isStudent}
                                               onChange={e => setIsStudent(!e.target.checked)} disabled={submitted1}/>
                                        <span>No</span>
                                    </label>
                                </div>
                                {!isStudent &&
                                <p className="support ~critical">Students should be the ones filling out this form!</p>}

                                <hr/>
                                <label className="label">How did you hear about LCS?</label>
                                <div>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "school"} onChange={() => {
                                            setChannel("school")
                                        }}/>
                                        <span>School</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "friend"} onChange={() => {
                                            setChannel("friend")
                                        }}/>
                                        <span>Friends</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "instagram"} onChange={() => {
                                            setChannel("instagram")
                                        }}/>
                                        <span>Instagram</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "facebook"} onChange={() => {
                                            setChannel("facebook")
                                        }}/>
                                        <span>Facebook</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "parents"} onChange={() => {
                                            setChannel("parents")
                                        }}/>
                                        <span>Parents</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "alumni"} onChange={() => {
                                            setChannel("alumni")
                                        }}/>
                                        <span>LCS Alumni</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "mentor"} onChange={() => {
                                            setChannel("mentor")
                                        }}/>
                                        <span>LCS Mentor</span>
                                    </label>
                                    <label className="switch block my-2">
                                        <input type="radio" name="channel" className="mr-2" disabled={submitted1}
                                               checked={channel === "other"} onChange={() => {
                                            setChannel("other")
                                        }}/>
                                        <span>Other</span>
                                    </label>
                                </div>
                                {errors.channel && <p className="support ~critical">Select an option</p>}
                                <hr/>
                                <label className="label">If you have a referral code, enter it below</label>
                                <input type="text" className="field" value={referralCode} disabled={submitted1}
                                       onChange={e => setReferralCode(e.target.value)}/>
                                {errors.referralCode && <p className="support ~critical">Invalid referral code</p>}
                            </form>
                            {!submitted1 && (
                                <>
                                    <hr/>
                                    <div className="flex justify-end mb-8">
                                        <button
                                            className="button ~neutral !normal ml-4"
                                            onClick={() => saveSection1(false)}
                                        >Save
                                        </button>
                                        <button
                                            className="button ~urge !high ml-4"
                                            onClick={() => saveSection1(true)}
                                            disabled={!isStudent}
                                        >
                                            Submit
                                            basic info
                                        </button>
                                    </div>
                                </>
                            )}
                            <button
                                className="button ~urge !high ml-4"
                                onClick={() => saveSection1(true)}
                                disabled={!isStudent}
                            >
                                Submit
                                basic info
                            </button>
                        </>
                    ), 1: (
                        <>
                            {submitted2 && <p className="aside ~info">You've already submitted this section of the application and can no longer make any changes.</p>}
                            {essayError && <p className="aside ~critical">Complete all essays to submit.</p>}
                            <form>
                                <label className="label">Tell about a successful startup that you find cool. What do you
                                    think makes them successful?</label>
                                <div className="my-4">
                                    <LimitedTextarea value={essay1} setValue={setEssay1} limit={300} rows={12} className="textarea field resize-none" disabled={submitted2}/>
                                </div>
                                <label className="label">What is your biggest weakness and what have you done to overcome
                                    it?</label>
                                <div className="my-4">
                                    <LimitedTextarea value={essay2} setValue={setEssay2} limit={300} rows={12} className="textarea field resize-none" disabled={submitted2}/>
                                </div>
                                <label className="label">What makes you a good fit for LCS and why do you want to take part
                                    in this program?</label>
                                <div className="my-4">
                                    <LimitedTextarea value={essay4} setValue={setEssay4} limit={300} rows={12} className="textarea field resize-none" disabled={submitted2}/>
                                </div>
                                <label className="label">Do you have any prior experience with entrepreneurship? Tell us if
                                    you've built anything in the past! (optional)</label>
                                <div className="my-4">
                                    <LimitedTextarea value={essay3} setValue={setEssay3} limit={300} rows={12} className="textarea field resize-none" disabled={submitted2}/>
                                </div>
                            </form>
                            {!submitted2 && (
                                <>
                                    <hr/>
                                    <div className="flex justify-end mb-8">
                                        <button className="button ~neutral !normal ml-4"
                                                onClick={() => saveSection2(false)}>Save
                                        </button>
                                        <button
                                            className="button ~urge !high ml-4"
                                            onClick={() => saveSection2(true)}
                                            disabled={!(essay1 && essay2 && essay3 && essay4)}
                                        >
                                            Submit written responses
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    ), 2: (
                        <>
                            <p>Testing</p>
                        </>
                    )
                }[openSection]}

            </div>
        </div>
    )
}