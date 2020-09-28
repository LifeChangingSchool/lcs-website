import {useState} from "react";
import {useRouter} from "next/router";
import validator from "validator";
import axios from "axios";
import LimitedTextarea from "../components/limited-textarea";
import LCSSEO from "../lib/seolib";

export default function Application2020() {
    const router = useRouter();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [channel, setChannel] = useState<string>("");
    const [referralCode, setReferralCode] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [schoolName, setSchoolName] = useState<string>("");
    const [schoolYear, setSchoolYear] = useState<string>("freshman");
    const [scholarship, setScholarship] = useState<boolean>(false);
    const [essay1, setEssay1] = useState<string>("");
    const [essay2, setEssay2] = useState<string>("");
    const [essay3, setEssay3] = useState<string>("");
    const [essay4, setEssay4] = useState<string>("");
    const [errors, setErrors] = useState<{
        firstName: boolean,
        lastName: boolean,
        channel: boolean,
        email: boolean,
        phone: boolean,
        schoolName: boolean,
        essay1: boolean,
        essay2: boolean,
        essay3: boolean,
        essay4: boolean,
    }>({
        firstName: false,
        lastName: false,
        channel: false,
        email: false,
        phone: false,
        schoolName: false,
        essay1: false,
        essay2: false,
        essay3: false,
        essay4: false,
    });
    const [submitError, setSubmitError] = useState<string>(null);

    function handleSubmit() {
        setErrors({
            firstName: false,
            lastName: false,
            channel: false,
            email: false,
            phone: false,
            schoolName: false,
            essay1: false,
            essay2: false,
            essay3: false,
            essay4: false,
        });
        setSubmitError(null);

        // validate all required fields
        let newErrors = {
            firstName: !firstName,
            lastName: !lastName,
            channel: !channel,
            email: !(email && validator.isEmail(email)),
            phone: !(phone && validator.isMobilePhone(phone)),
            schoolName: !schoolName,
            essay1: !essay1,
            essay2: !essay2,
            essay3: !essay3,
            essay4: !essay4,
        }

        if (Object.values(newErrors).some(d => d)) {
            setErrors(newErrors);
            return;
        }

        axios.post("/api/AppOct2020v2/submitApplication", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            channel: channel,
            schoolName: schoolName,
            schoolYear: schoolYear,
            referralCode: referralCode,
            scholarship: scholarship,
            essay1: essay1,
            essay2: essay2,
            essay3: essay3,
            essay4: essay4,
        }, {
            headers: {
                "Authorization": `token ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        }).then(res => {
            if (res.data.message === "Success") {
                router.push("/application-success");
            } else {
                setSubmitError(res.data.message);
            }
        }).catch(e => {
            setSubmitError(e);
            console.log(e);
        });
    }

    const submitErrorMarkup = submitError && (
        <div className="aside ~critical content">
            <p className="font-bold">{submitError}</p>
            <p>If you think this is an error, contact us at <a
                href="mailto:hello@lifechangingschool.org">hello@lifechangingschool.org</a>.</p>
        </div>
    );

    const errorNotifMarkup = Object.values(errors).some(d => d) && (
        <div className="aside ~critical content">
            <p>Please fill out all fields correctly and try again.</p>
        </div>
    );

    return (
        <main className="max-w-xl mx-auto py-8">
            <LCSSEO title="Fall 2020 Application" description="Submit your application for the October session of Life Changing School. Final application
            deadline: September 30, 2020."/>
            <h1 className="heading">Life Changing School: Fall 2020 Application</h1>
            <p className="my-4 text-xs sm:text-base">Fill out the
                application below to be considered for the October session of Life Changing School. Final application deadline: Sunday, <b>October 18, 2020, at 11:59 PM EST.</b> Early deadline for $150 off tuition: Sunday, <b>October 4, 2020, at 11:59 EST.</b></p>
            {submitErrorMarkup}
            {errorNotifMarkup}
            <form action="">

                <hr className="my-12"/>

                <h3 className="text-2xl">Basic info</h3>
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

                <label className="label">Do you wish to be considered for a need-based scholarship?</label>
                <div className="mb-8">
                    <label className="switch block my-2">
                        <input type="radio" name="scholarship" className="mr-2" checked={scholarship} onChange={e => setScholarship(e.target.checked)}/>
                        <span>Yes</span>
                    </label>
                    <label className="switch block my-2">
                        <input type="radio" name="scholarship" className="mr-2" checked={!scholarship} onChange={e => setScholarship(!e.target.checked)}/>
                        <span>No</span>
                    </label>
                </div>

                <label className="label">If you have a referral code, enter it below</label>
                <input type="text" className="field" value={referralCode}
                       onChange={e => setReferralCode(e.target.value)}/>

                <hr className="my-12"/>

                <h3 className="text-2xl">Written responses</h3>

                <label className="label">Tell about a successful startup that you find cool. What do you
                    think makes them successful?</label>
                <div className="my-4">
                    <LimitedTextarea value={essay1} setValue={setEssay1} limit={300} rows={12} className="textarea field resize-none"/>
                    {errors.essay1 && <p className="support ~critical">Please complete this question.</p>}
                </div>
                <label className="label">What is your biggest weakness and what have you done to overcome
                    it?</label>
                <div className="my-4">
                    <LimitedTextarea value={essay2} setValue={setEssay2} limit={300} rows={12} className="textarea field resize-none"/>
                    {errors.essay2 && <p className="support ~critical">Please complete this question.</p>}
                </div>
                <label className="label">What makes you a good fit for LCS and why do you want to take part
                    in this program?</label>
                <div className="my-4">
                    <LimitedTextarea value={essay4} setValue={setEssay4} limit={300} rows={12} className="textarea field resize-none"/>
                    {errors.essay4 && <p className="support ~critical">Please complete this question.</p>}
                </div>
                <label className="label">Do you have any prior experience with entrepreneurship? Tell us if
                    you've built anything in the past! (optional)</label>
                <div className="my-4">
                    <LimitedTextarea value={essay3} setValue={setEssay3} limit={300} rows={12} className="textarea field resize-none"/>
                    {errors.essay3 && <p className="support ~critical">Please complete this question.</p>}
                </div>
            </form>
            <button className="button ~urge !high button-big" onClick={handleSubmit}>Submit</button>
            {submitErrorMarkup}
            {errorNotifMarkup}
        </main>
    )
}