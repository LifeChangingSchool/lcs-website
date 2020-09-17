import LanderRedContainer from "../components/lander-red-container";
import speakers from "../content/speakers.json";

const Speakers = () => (
    <main className="lcs-container">
        <LanderRedContainer>
            <h1 className="heading text-white text-center">Fall 2020 Speakers</h1>
        </LanderRedContainer>
        <hr className="sep"/>
        {speakers.speakers.map((s, i) => (
            <>
                <div className="sm:flex items-center">
                    <img className="rounded-full w-32" src={s.headshot}
                         alt={`Headshot of ${s.name}`}/>
                    <div className="sm:ml-8">
                        <h3 className="font-bold mt-4 sm:mt-0">{s.name}</h3>
                        <p className="support">{s.title}</p>
                        <p className="mt-4 text-gray-700">{s.bio}</p>
                    </div>
                </div>
                {i !== speakers.speakers.length - 1 ? (
                    <hr/>
                ) : ""}
            </>
        ))}
        <hr className="sep"/>
    </main>
)

export default Speakers;