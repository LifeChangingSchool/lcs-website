const LanderBar = () => (
    <div className="my-12">
        <div className="-mx-2 flex justify-around">
            {Array.apply(0, Array(6)).map((_, i) => (
                <div className={`mx-1 rounded-full w-full ${i >= 2 ? "lcs-bg-yellow" : "lcs-bg-red"} h-2`}
                     key={i}/>
            ))}
        </div>
        <div className="sm:flex mt-2">
            <div className="lcs-uppercase-bold">
                <span>2 Week </span>
                <span className="lcs-text-red">Eship intensive</span>
            </div>
            <div className="lcs-uppercase-bold ml-auto">
                <span>4 Week </span>
                <span className="lcs-text-yellow">Startup incubator</span>
            </div>
        </div>
    </div>
);

export default LanderBar;