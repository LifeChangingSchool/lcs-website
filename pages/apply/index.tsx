import {useEffect} from "react";
import {useAuth} from "../../lib/authlib";
import {useRouter} from "next/router";
import Accordion from "react-robust-accordion";

export default function ApplyIndex() {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.user) {
            router.push("/apply/login");
        }
    }, []);
    return (
        <div>
            <h1>Test</h1>
            <Accordion label={<p>Testing accordion</p>}>
                <p>Accordion inside</p>
            </Accordion>
        </div>
    )
}