import React from "react";

export default function Label(props) {
    return (
        <div className="param__details">
            <input
                disabled={props.disabled}
                type="text"
                autoComplete="off"
                className="param__value"
                value={props.value}
                inputMode="decimal"
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <p className="param__mark">{props.mark}</p>
        </div>
    );
}
