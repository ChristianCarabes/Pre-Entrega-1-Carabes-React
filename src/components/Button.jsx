import { useState } from "react";

export default function Button (props) {
    const { color, disabled, children } = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [ colorState, setColorState] = useState(color);

    return (
        <button
        onClick={() => {
            setColorState("purple");
            setIsDisabled("true");
        }}
        style={{backgroundColor: colorState}}
        disabled = {isDisabled}
        >
            {children}
        </button>
    );
}