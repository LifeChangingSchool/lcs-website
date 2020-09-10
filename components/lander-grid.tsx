import {FaBook, FaChalkboardTeacher, FaRocket, FaToolbox, FaUserCheck} from "react-icons/fa";

const LanderGrid = () => (
    <div className="lcs-lander-grid">
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-red">
                <FaBook/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">Rigorous curriculum</h3>
            <p className="text-xs">Learn everything you need to know about the eship process, from customer
                discovery to getting funding.</p>
        </div>
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-red">
                <FaRocket/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">Launch a real company</h3>
            <p className="text-xs">Create a business plan, build an MVP, and launch a real startup using the
                Lean startup methodology.</p>
        </div>
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-green">
                <img src="/img/startuptree.png" alt="StartupTree Logo" className="w-4"/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">Premier network</h3>
            <p className="text-xs">Network with top entrepreneurs and students at weekly workshops and on
                StartupTree.</p>
        </div>
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-red">
                <FaChalkboardTeacher/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">Live lessons and workshops</h3>
            <p className="text-xs">Work with peers, instructors, and guest experts in live Zoom sessions.</p>
        </div>
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-red">
                <FaUserCheck/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">1-on-1 mentorship</h3>
            <p className="text-xs">You'll be directly supported by a personal mentor as you learn and build your
                business.</p>
        </div>
        <div className="lcs-grid-item">
            <div className="shield lcs-bg-red">
                <FaToolbox/>
            </div>
            <h3 className="font-accent font-bold text-lg my-2 leading-5">No prior experience required</h3>
            <p className="text-xs">We'll use no-code tools and teach you everything you need to know.</p>
        </div>
    </div>
)

export default LanderGrid;