import { useState } from "react";
import "./Input.scss";

function Input({ onChange }) {
    const [value, setValue] = useState("");
    return (
        <input
            value={value}
            placeholder="Search a cocktail by name or by ingredient"
            onChange={function (ev) {
                setValue(ev.target.value);
                onChange(ev.target.value);
            }}
        />
    );
}

export default Input;
