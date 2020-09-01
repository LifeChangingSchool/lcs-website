import Accordion from "react-robust-accordion";

const LanderFAQ = (props: {question: string, answer: string}) => (
    <Accordion label={(
            <h3 className="font-bold">{props.question}</h3>
    )} className="p-4 border" open={false}>
        <div>
            <p className="opacity-75 mt-4">{props.answer}</p>
        </div>
    </Accordion>
)

export default LanderFAQ;
