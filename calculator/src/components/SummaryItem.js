import React from "react";

export default function SummaryItem(props) {
    return (
        <div
            className={`summary__item ${
                props.disabled ? "summary__item_disabled" : ""
            }`}
        >
            <div className="summary__title">{props.title}</div>
            <div className="summary__value" id="total-month-payment">
                {props.value}
                <span> ₽</span>
            </div>
        </div>
    );
}
