import Team from "../content/team.json";

export default function LCSTeam() {
    return (
        <>
            {
                Team.team.map((item, i) => (
                    <>
                        <div className="sm:flex items-center">
                            <img className="rounded-full w-32" src={item.headshot}
                                 alt={`Headshot of LCS ${item.title} ${item.name}`}/>
                            <div className="sm:ml-8">
                                <h3 className="label mt-4 sm:mt-0">{item.name}</h3>
                                <p className="support">{item.title}</p>
                                <p className="mt-4 text-gray-700">{item.bio}</p>
                            </div>
                        </div>
                        {i !== Team.team.length - 1 ? (
                            <hr/>
                        ) : ""}
                    </>
                ))
            }
        </>
    )
}