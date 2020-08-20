import { useForm } from "react-hook-form";
import { useAuth } from "../../lib/authlib";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ApplyLogin(){
    const auth = useAuth();
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm();
    const [authError, setAuthError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function onSubmit(data) {
        setAuthError(null);
        setIsLoading(true);
        auth.signin(data.email, data.password).then(() => {
            setIsLoading(false);
            router.push("/apply");
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
            <h1 className="heading">Log in</h1>
            <p className="support">Resume your existing application</p>
            <hr/>

            <form onSubmit={handleSubmit(onSubmit)}>

                {router.query.message && <p className="aside ~urge">{router.query.message}</p>}

                {isLoading && <p className="aside ~info">Loading...</p>}

                {authError && <p className="aside ~critical">{authError}</p>}

                <label className="label">Email</label>
                <input type="email" name="email" className="field" ref={register({required: true})}/>
                {errors.email && <p className="~critical support">Enter a valid email</p>}

                <label className="label">Password</label>
                <input type="password" name="password" className="field" ref={register({required: true})}/>
                {errors.password && <p className="~critical support">Enter a valid password</p>}

                <button className="button button-big ~urge !high mt-4">Log in</button>

                <hr/>

                <div className="flex items-center">
                    <p>Don't have an account yet?</p>
                    <Link href="/apply/signup"><a className="button ml-auto">Sign up</a></Link>
                </div>
            </form>
        </div>
    )
}