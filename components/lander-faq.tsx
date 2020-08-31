import Accordion from "react-robust-accordion";

const LanderFAQ = (props: {question: string, answer: string}) => (
    <Accordion label={(
            <p>What are you looking for in your applicants?</p>
    )} open={false} className="p-4 border">
        <div>
            <hr/>
            <p className="text-xs">The admissions team is looking for talented, highly-motivated students who are interested in attending the program because they have a passion for learning and problem-solving and wish to enrich their knowledge of programming and entrepreneurship to solve real world problems.</p>
        </div>
    </Accordion>
)

export default LanderFAQ;
