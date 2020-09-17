import {useState} from "react";
import validator from "validator";
import axios from "axios";
import {useRouter} from "next/router";
import LCSSEO from "../lib/seolib";
import Link from "next/link";

export default function Interest() {
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [channel, setChannel] = useState<string>("");
    const [referralCode, setReferralCode] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [schoolName, setSchoolName] = useState<string>("");
    const [schoolYear, setSchoolYear] = useState<string>("freshman");
    const [errors, setErrors] = useState<{
        firstName: boolean,
        lastName: boolean,
        channel: boolean,
        email: boolean,
        phone: boolean,
        schoolName: boolean
    }>({
        firstName: false,
        lastName: false,
        channel: false,
        email: false,
        phone: false,
        schoolName: false
    });
    const [submitError, setSubmitError] = useState<string>(null);

    async function handleSubmit(){
        setErrors({
            firstName: false,
            lastName: false,
            channel: false,
            email: false,
            phone: false,
            schoolName: false
        });
        setSubmitError(null);
        // validate all required fields
        let newErrors = {
            firstName: !firstName,
            lastName: !lastName,
            channel: !channel,
            email: !(email && validator.isEmail(email)),
            phone: !(phone && validator.isMobilePhone(phone)),
            schoolName: !schoolName
        }

        if (Object.values(newErrors).some(d => d)) {
            setErrors(newErrors);
            return;
        }

        axios.post("/api/AppOct2020v2/submitInterest", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            channel: channel,
            schoolName: schoolName,
            schoolYear: schoolYear,
            referralCode: referralCode
        }, {
            headers: {
                "Authorization": `token ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        }).then(res => {
            if (res.data.message === "Success") {
                router.push("/interest-success");
            } else {
                setSubmitError(res.data.message);
            }
        }).catch(e => {
            setSubmitError(e);
            console.log(e);
        });
    }

    const submitErrorMarkup = (
        <div className="aside ~critical content">
            <p className="font-bold">{submitError}</p>
            <p>Check your inbox for an email with application instructions. If you can't find your email, contact us directly at <a href="mailto:hello@lifechangingschool.org">hello@lifechangingschool.org</a>.</p>
        </div>
    );

    const errorNotifMarkup = Object.values(errors).some(d => d) && (
        <div className="aside ~critical content">
            <p>Please fill out all fields correctly and try again.</p>
        </div>
    );

    return (
        <main className="lcs-container">
            <LCSSEO title="Apply to LCS" description="Ready to make most of your fall? Let's get started. Enter your information below, and we will send
                    you more details on how to apply."/>
            <p className="content aside max-w-2xl mx-auto text-xs sm:text-base"><b>Already started your application?</b><br/> If you made an account already, <Link href="/apply"><a>login to the portal here.</a></Link> Otherwise, go to the <Link href="/application2020"><a>new version of the application.</a></Link></p>
            <div className="max-w-2xl mx-auto p-4 sm:p-8 shadow-xl my-8">
                <h1 className="heading">Life Changing School: Fall 2020 Interest Form</h1>
                <p className="my-4 text-xs sm:text-base">Ready to make most of your fall? Let's get started. Enter your information below, and we will send
                    you more details on how to apply. Final application deadline: September 30, 2020. Need-based
                    scholarships available for all students.</p>
                <hr/>
                {submitError && submitErrorMarkup}
                {errorNotifMarkup}
                <form action="">
                    <label className="label">Student name</label>
                    <div className="md:flex justify-between md:-mx-2">
                        <div className="flex-1 md:mx-2">
                            <input type="text" className="field" value={firstName}
                                   onChange={e => setFirstName(e.target.value)}/>
                            {errors.firstName && <p className="support ~critical -mb-2">Enter the student's first name</p>}
                            <p className="support mb-4">First name</p>
                        </div>
                        <div className="flex-1 md:mx-2">
                            <input type="text" className="field" value={lastName}
                                   onChange={e => setLastName(e.target.value)}/>
                            {errors.lastName && <p className="support ~critical -mb-2">Enter the student's last name</p>}
                            <p className="support mb-4">Last name</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 mb-8 gap-x-4">
                        <div>
                            <label className="label">Email</label>
                            <input type="email" className="field" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                            {errors.email && <p className="support ~critical">Enter a valid email</p>}
                        </div>
                        <div>
                            <label className="label">Phone number</label>
                            <input type="text" className="field" value={phone}
                                   onChange={e => setPhone(e.target.value)}/>
                            {errors.phone && <p className="support ~critical">Enter a valid phone number</p>}
                        </div>
                        <div>
                            <label className="label">High school name</label>
                            <input type="email" className="field" value={schoolName}
                                   onChange={e => setSchoolName(e.target.value)}/>
                            {errors.schoolName && <p className="support ~critical">Enter a school name</p>}
                        </div>
                        <div>
                            <label className="label">School year</label>
                            <select value={schoolYear} onChange={e => setSchoolYear(e.target.value)} className="field">
                                <option value="freshman">Freshman</option>
                                <option value="sophomore">Sophomore</option>
                                <option value="junior">Junior</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                    </div>

                    <label className="label">How did you hear about LCS?</label>
                    <div className="mb-8">
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "school"} onChange={() => {
                                setChannel("school")
                            }}/>
                            <span>School</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "friend"} onChange={() => {
                                setChannel("friend")
                            }}/>
                            <span>Friends</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "instagram"} onChange={() => {
                                setChannel("instagram")
                            }}/>
                            <span>Instagram</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "facebook"} onChange={() => {
                                setChannel("facebook")
                            }}/>
                            <span>Facebook</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "parents"} onChange={() => {
                                setChannel("parents")
                            }}/>
                            <span>Parents</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "alumni"} onChange={() => {
                                setChannel("alumni")
                            }}/>
                            <span>LCS Alumni</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "mentor"} onChange={() => {
                                setChannel("mentor")
                            }}/>
                            <span>LCS Mentor</span>
                        </label>
                        <label className="switch block my-2">
                            <input type="radio" name="channel" className="mr-2"
                                   checked={channel === "other"} onChange={() => {
                                setChannel("other")
                            }}/>
                            <span>Other</span>
                        </label>
                        {errors.channel && <p className="support ~critical">Select an option</p>}
                    </div>
                    <label className="label">If you have a referral code, enter it below</label>
                    <input type="text" className="field" value={referralCode}
                           onChange={e => setReferralCode(e.target.value)}/>
                </form>
                <button className="button ~urge !high button-big" onClick={handleSubmit}>Submit</button>
                {submitError && submitErrorMarkup}
                {errorNotifMarkup}
            </div>
        </main>
    )
}