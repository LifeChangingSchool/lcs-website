import { useForm } from "react-hook-form";
import { useAuth } from "../../lib/authlib";
import { useRouter } from "next/router";
import {useState} from "react";

export default function ApplySignup(){
    const auth = useAuth();
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm();
    const [authError, setAuthError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function onSubmit(data) {
        setAuthError(null);
        setIsLoading(true);

        auth.confirm(data.code).then(res => {
            setIsLoading(false);
            console.log(res);
            router.push({pathname: "/apply/login", query: {message: "Account confirmed. You can now log in"}});
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

                <label className="label">Verification code</label>
                <input type="text" name="code" className="field" ref={register({required: true})}/>
                {errors.email && <p className="~critical support">Enter a valid code</p>}

                <button className="button ~urge !high mt-4">Verify account</button>
            </form>
        </div>
    )
}