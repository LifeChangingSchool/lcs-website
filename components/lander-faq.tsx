import Accordion from "react-robust-accordion";

const LanderFAQ = (props: {question: string, answer: string}) => (
    <Accordion label={(
            <p>{props.question}</p>
    )} open={false} className="p-4 border">
        <div>
            <p className="opacity-25 mt-4">{props.answer}</p>
        </div>
    </Accordion>
)

export default LanderFAQ;
