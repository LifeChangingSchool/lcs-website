import LCSSEO from "../lib/seolib";

export default function InterestSuccess(){
    return (
        <main className="lcs-container py-8">
            <LCSSEO title="Thank you for expressing your interest" description="Thank you for expressing your interest in applying to LCS. Check your email for instructions on how to apply."/>
            <h1 className="heading">Thank you for expressing your interest</h1>
            <div className="content">
                <p>Check your email for instructions on how to apply to Life Changing School.</p>
                <p className="opacity-50">Don't see an email? Contact us for help at hello@lifechangingschool.org.</p>
            </div>
        </main>
    )
}