import {useAuth} from "../lib/authlib";
import {useRouter} from "next/router";
import Link from "next/link";

export default function ApplyNavbar() {
    const auth = useAuth();
    const router = useRouter();

    function clickSignOut() {
        auth.signout().then(res => {
            console.log(res);
            router.push({pathname: "/apply/login", query: {message: "Logged out."}});
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div className="lcs-container flex h-16 items-center border-t border-b mb-8">
            <p className="hidden sm:block font-bold">LCS Application Portal</p>
            <div className="flex ml-auto items-center">
                {auth.user ? (
                    <>
                        <p className="text-xs border-r pr-4 mr-4 text-right">Logged in with email<br/><b>{auth.user.attributes.email}</b></p>
                        <button className="button" onClick={clickSignOut}>Sign out</button>
                    </>
                ): (
                    <>
                        <Link href="/apply/login"><a className="button">Log in</a></Link>
                        <Link href="/apply/signup"><a className="button ~urge !high">Sign up</a></Link>
                    </>
                )}
            </div>
        </div>
    )
}