import Speakers from "../content/speakers.json";
import Link from "next/link";

const LanderSpeakers = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
        {Speakers.speakers.map(s => (
            <div className="text-center">
                <img className="rounded-full mb-4 w-24 sm:w-32 mx-auto" src={s.headshot}/>
                <h3 className="font-bold">{s.name}</h3>
                <p className="support">{s.title}</p>
            </div>
        ))}
        <div>
            <Link href="/speakers"><a>
                <div className="rounded-full mb-4 w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gray-200 flex items-center justify-center">
                    <span>More &gt;</span>
                </div>
            </a></Link>
        </div>
    </div>
)

export default LanderSpeakers;