import {useState} from "react";

interface Props {
    value: string;
    setValue: (string) => void;
    onChange?: (SyntheticEvent) => void;
    limit: number;
    className?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
}

// from https://stackoverflow.com/a/18679657/4517586
function countWords(str: string): number {
    return str ? str.trim().split(/\s+/).length : 0;
}

export default function LimitedTextarea(props: Props) {
    const [count, setCount] = useState<number>(countWords(props.value));

    function handleChange(e) {
        const newValue = e.target.value;
        const newCount = countWords(newValue);
        if (newCount <= props.limit) {
            props.onChange ? props.onChange(e) : props.setValue(newValue);
            setCount(newCount);
        }
    }

    return (
        <>
            <textarea
                className={props.className}
                value={props.value}
                onChange={handleChange}
                placeholder={props.placeholder}
                rows={props.rows}
                disabled={props.disabled || false}
            />
            <p className="support">{count}/{props.limit} words</p>
        </>
    )
}