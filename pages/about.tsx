import LanderRedContainer from "../components/lander-red-container";
import GeneralCTA from "../components/general-cta";

const About = () => (
    <main className="lcs-container">
        <LanderRedContainer>
            <h1 className="heading text-white text-center">About LCS</h1>
        </LanderRedContainer>
        <div className="my-12 content max-w-xl mx-auto">
            <h2 className="heading">Our team</h2>
            <p>The Virtual Life Changing Summer Program will continue to be run by the same incredible team of Cornell University members who have years of experience with startups and programming. Please trust that our experienced Cornell members will build the same strong, life changing virtual summer program for our students. We understand that this change will raise a lot of questions and want to assure you that the Life Changing Summer team is here to answer all of them!</p>
        </div>
        <GeneralCTA blog={false}/>
    </main>
)

export default About;