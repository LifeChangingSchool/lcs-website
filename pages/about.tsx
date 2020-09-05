import LanderRedContainer from "../components/lander-red-container";
import GeneralCTA from "../components/general-cta";
import LCSTeam from "../components/team";

const About = () => (
    <main className="lcs-container">
        <LanderRedContainer>
            <h1 className="heading text-white text-center">About LCS</h1>
        </LanderRedContainer>
        <div className="my-12 content max-w-xl mx-auto">
            <h2 className="heading">Our team</h2>
            <p>The virtual Life Changing School Program is run by an incredible team of Cornell University members who have 12+ years of experience with launching ventures and guiding entrepreneurs. Our experienced Cornell members will build the same strong, life changing virtual summer program for our students.</p>
        </div>
        <hr className="my-12"/>
        <LCSTeam/>
        <hr className="sep"/>
    </main>
)

export default About;