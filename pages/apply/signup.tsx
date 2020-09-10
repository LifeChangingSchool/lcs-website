import {useForm} from "react-hook-form";
import {useAuth} from "../../lib/authlib";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";
import LCSSEO from "../../lib/seolib";

export default function ApplySignup() {
    const auth = useAuth();
    const router = useRouter();
    const {register, handleSubmit, errors} = useForm();
    const [matchError, setMatchError] = useState<boolean>(false);
    const [authError, setAuthError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function onSubmit(data) {
        setAuthError(null);
        setMatchError(false);

        if (data.password !== data.confirmPassword) {
            setMatchError(true);
            return;
        }

        setIsLoading(true);

        auth.signup(data.email, data.password).then(res => {
            setIsLoading(false);
            console.log(res);
            router.push({pathname: "/apply/confirm", query: {email: data.email}});
        }).catch(e => {
            setIsLoading(false);
            console.log(e);
            setAuthError(e.message);
        })
    }

    useEffect(() => {
        function checkRedirect(e = null) {
            if (auth.user || e) {
                router.push({pathname: "/apply", query: {message: "Already logged in"}});
            }
        }

        window.addEventListener("authSuccess", checkRedirect);

        checkRedirect();

        return () => {
            window.removeEventListener("authSuccess", checkRedirect);
        }
    }, []);

    return (
        <div className="lcs-container">
            <div className="lg:flex justify-between lg:-mx-8">
                <div className="max-w-sm p-8 lg:ml-8 shadow-xl mx-auto">
                    <LCSSEO title="Application Portal Signup"
                            description="Sign up to our portal to fill out and submit your application to Life Changing School, an entrepreneurship program and incubator for high schoolers."/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="heading">Start your application today</h1>
                        <p className="support">Create an account in our portal to submit your application</p>
                        <hr/>

                        {isLoading && <p className="aside ~info">Loading...</p>}

                        {authError && <p className="aside ~critical">{authError}</p>}

                        <label className="label">Email</label>
                        <input type="email" name="email" className="field" ref={register({required: true})}/>
                        {errors.email && <p className="~critical support">Enter a valid email</p>}

                        <label className="label">Password</label>
                        <input type="password" name="password" className="field" ref={register({required: true})}/>
                        {errors.password && <p className="~critical support">Enter a valid password</p>}

                        <label className="label">Confirm password</label>
                        <input type="password" name="confirmPassword" className="field"
                               ref={register({required: true})}/>
                        {matchError && <p className="~critical support">Passwords don't match</p>}

                        <button className="button button-big ~urge !high mt-4">Get started</button>

                        <hr/>

                        <div className="flex items-center">
                            <p>Already have an account?</p>
                            <Link href={`/apply/login?returnStage=${router.query.returnStage}`}><a
                                className="button ml-auto">Log in</a></Link>
                        </div>
                    </form>
                </div>
                <div className="flex-grow lg:px-8 lg:pt-8 content">
                    <hr className="sep lg:hidden"/>
                    <h2 className="heading">What's in the application?</h2>
                    <p>We ask for some basic info, as well as four short response questions:</p>
                    <ol>
                        <li>Tell about a successful startup that you find cool. What do you think makes them
                            successful?
                        </li>
                        <li>What is your biggest weakness and what have you done to overcome it?</li>
                        <li>What makes you a good fit for LCS and why do you want to take part in this program?</li>
                        <li>Do you have any prior experience with entrepreneurship? Tell us if you've built anything in
                            the past! (optional)
                        </li>
                    </ol>
                    <p>You don't need to write a super-polished essay for each one. Just give us what you've got! A few
                        sentences that will help us get to know you better is all we're looking for.</p>
                    <hr className="sep lg:hidden"/>
                </div>
            </div>
        </div>
    )
}
