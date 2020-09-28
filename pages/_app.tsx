import "a17t"
import '../styles/globals.css'
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    return (
        <>
            <Navbar/>
            <div className="container">
                <Component {...pageProps} />
            </div>
            <Footer/>
        </>
    )
}

export default MyApp
