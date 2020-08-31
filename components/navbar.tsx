import Link from "next/link";
import {FaBars} from "react-icons/fa";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <>
            <div className="w-full fixed top-0 z-20 bg-white">
                <div className="container">
                    <div className="lcs-container flex h-16 items-center relative">
                        <Link href="/"><a className="flex items-center">
                            <img className="h-8 mr-2" src="/logo.svg" alt="LCS Logo"/>
                            <span className="font-accent uppercase text-xs leading-3 sm:text-lg" style={{
                                fontWeight: 900
                            }}>Life <br className="sm:hidden"/>Changing <br className="sm:hidden"/>School</span>
                        </a></Link>
                        <div className={`absolute lg:relative right-0 self-start lg:self-auto mt-16 flex-col flex lg:mt-0 lg:flex-row lg:ml-auto bg-gray-100 lg:bg-transparent p-4 lg:p-0 ${menuOpen ? "" : "hidden lg:flex"}`}>
                            <Link href="/"><a className="lg:ml-4 my-1">FAQs</a></Link>
                            <Link href="/"><a className="lg:ml-4 my-1">About</a></Link>
                            <Link href="/"><a className="lg:ml-4 my-1">Blog</a></Link>
                        </div>
                        {router.route.substr(0,6) !== "/apply" && <Link href="/apply"><a className="lcs-cta-button ml-auto lg:ml-4">Apply</a></Link>}
                        <button className={`${router.route.substr(0,6) === "/apply" ? "ml-auto" : "ml-4"} lg:hidden`} onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-16"/>
        </>
    )
}