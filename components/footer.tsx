import GeneralCTA from "./general-cta";
import LanderCTA from "./lander-cta";
import {useRouter} from "next/router";

export default function Footer(){
    const router = useRouter();

    return (
        <>
            <GeneralCTA blog={router.route.substr(0,5) === "/blog"}/>
            <LanderCTA/>
            <div className="w-full bg-gray-700 text-white">
                <div className="container">
                    <div className="py-8 lcs-container">
                        <div className="flex items-center">
                            <img className="h-8 mr-2" src="/logo.svg" alt="LCS Logo"/>
                            <p>Life Changing School</p>
                        </div>
                        <hr/>
                        <p className="text-xs">hello@lifechangingschool.org</p>
                        <p className="text-xs text-light">409 College Ave, 2nd Floor (eHub location)<br/>Ithaca NY, 14850</p>
                    </div>
                </div>
            </div>
        </>
    );
}
