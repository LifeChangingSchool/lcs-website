import Accordion from "react-robust-accordion";

const LanderFAQ = (props: {question: string, answer: string}) => (
    <Accordion label={(
            <p>{props.question}</p>
    )} open={false} className="p-4 border">
        <div>
            <hr/>
            <p className="text-xs">{props.answer}</p>
        </div>
    </Accordion>
)

export default LanderFAQ;
