import { useForm } from "react-hook-form";
import { useAuth } from "../../lib/authlib";
import { useRouter } from "next/router";
import {useState} from "react";

export default function ApplySignup(){
    const auth = useAuth();
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm();
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

    return (
        <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>

                {isLoading && <p className="aside ~info">Loading...</p>}

                {authError && <p className="aside ~critical">{authError}</p>}

                <label className="label">Email</label>
                <input type="email" name="email" className="field" ref={register({required: true})}/>
                {errors.email && <p className="~critical support">Enter a valid email</p>}

                <label className="label">Password</label>
                <input type="password" name="password" className="field" ref={register({required: true})}/>
                {errors.password && <p className="~critical support">Enter a valid password</p>}

                <label className="label">Confirm password</label>
                <input type="password" name="confirmPassword" className="field" ref={register({required: true})}/>
                {matchError && <p className="~critical support">Passwords don't match</p>}

                <button className="button ~urge !high mt-4">Sign up</button>
            </form>
        </div>
    )
}