import { useForm } from "react-hook-form";
import { useAuth } from "../../lib/authlib";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Head from "next/head";
import getTitle from "../../lib/titlelib";

export default function ApplySignup(){
    const auth = useAuth();
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm();
    const [authError, setAuthError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function onSubmit(data) {
        setAuthError(null);
        setIsLoading(true);

        auth.confirm(router.query.email, data.code).then(res => {
            setIsLoading(false);
            console.log(res);
            router.push({pathname: "/apply/login", query: {message: "Account confirmed. You can now log in"}});
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
        <div className="max-w-sm mx-auto">
            <Head>
                <title>{getTitle("Verify email")}</title>
            </Head>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="heading">Verify email</h1>
                <p className="support">A verification code has been sent to your email account. Enter it below to confirm your email and continue to the application</p>
                <hr/>

                {isLoading && <p className="aside ~info">Loading...</p>}

                {authError && <p className="aside ~critical">{authError}</p>}

                <label className="label">Verification code</label>
                <input type="text" name="code" className="field" ref={register({required: true})}/>
                {errors.email && <p className="~critical support">Enter a valid code</p>}

                <button className="button button-big ~urge !high mt-4">Verify account</button>

                <hr/>
                <p className="support content">Didn't get an email? Contact us at <a href="mailto:hello@lifechangingschool.org">hello@lifechangingschool.org</a> for help.</p>
            </form>
        </div>
    )
}