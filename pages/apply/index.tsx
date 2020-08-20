import {useEffect} from "react";
import {useAuth} from "../../lib/authlib";
import {useRouter} from "next/router";

export default function ApplyIndex() {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.user) {
            router.push("/apply/login");
        }
    }, []);
    return (
        <h1>Apply</h1>
    )
}