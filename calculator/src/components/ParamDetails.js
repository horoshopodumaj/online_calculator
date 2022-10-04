import React from "react";
import Cleave from "cleave.js/react";

export default function Label(props) {
    return (
        <div className="param__details">
            <Cleave
                disabled={props.disabled}
                type="text"
                autoComplete="off"
                className="param__value"
                value={props.value}
                inputMode="decimal"
                onChange={props.onChange}
                onBlur={props.onBlur}
                options={{
                    numeral: true,
                    numeralThousandsGroupStyle: "thousand",
                    delimiter: " ",
                }}
            />
            <p className="param__mark">{props.mark}</p>
        </div>
    );
}
