import Head from "next/head";

const LCSSEO = (props: {title: string, description: string}) => (
    <Head>
        <title>{props.title}{props.title ? " | " : ""}Life Changing School</title>
        <meta name="description" content={props.description || "LCS is a virtual entrepreneurship program and incubator for high schoolers, run by Cornell University members with years of entrepreneurship experience."}/>
    </Head>
)

export default LCSSEO;