import "a17t"
import '../styles/globals.css'
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import {ProvideAuth} from "../lib/authlib";
import Amplify from 'aws-amplify';
import config from '../aws-exports';
import ApplyNavbar from "../components/apply-navbar";
import Navbar from "../components/navbar";

Amplify.configure(config);

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <>
            <Navbar/>
            <div className="container">
                {router.route.substr(0, 6) === "/apply" ? (
                    <ProvideAuth>
                        <ApplyNavbar/>
                        <Component {...pageProps} />
                    </ProvideAuth>
                ) : <Component {...pageProps} />}
            </div>
        </>
    )
}

export default MyApp
