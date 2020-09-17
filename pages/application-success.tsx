import LCSSEO from "../lib/seolib";

export default function ApplicationSuccess(){
    return (
        <main className="lcs-container py-8">
            <LCSSEO title="Thank you for applying" description="Thank you for submitting your application to LCS. Check your email for updates on your application status."/>
            <h1 className="heading">Thank you for applying</h1>
            <div className="content">
                <p>Check your email for updates on your application status.</p>
                <p className="opacity-50">Contact us at hello@lifechangingschool.org if you have any questions!</p>
            </div>
        </main>
    )
}