import {useEffect} from "react";
import {useRouter} from "next/router";
import LCSSEO from "../../lib/seolib";
import Link from "next/link";

export default function ApplyVerify(){
    const router = useRouter();
    useEffect(() => {
        router.push("/application2020");
    }, []);

    return (
        <main>
            <LCSSEO title="Redirecting..." description="Redirecting to our new application portal..."/>
            <p className="aside max-w-xl mx-auto">Redirecting to our new application portal. If you aren't redirected, <Link href="/application2020"><a>click here.</a></Link></p>
        </main>
    )
}