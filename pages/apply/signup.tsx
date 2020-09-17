import {useRouter} from "next/router";
import {useEffect} from "react";
import Link from "next/link";
import LCSSEO from "../../lib/seolib";

export default function ApplySignup() {
    const router = useRouter();

    useEffect(() => {
        router.push("/interest");
    }, []);

    return (
        <main className="lcs-container">
            <LCSSEO title="Redirecting..."/>
            <h1 className="content">Redirecting you to our <Link href="/interest"><a>new application portal...</a></Link></h1>
        </main>
    )
}
