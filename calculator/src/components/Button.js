import React from "react";
import Spinner from "./Spinner";

export default function Button(props) {
    return (
        <button
            type="submit"
            className={`form__button ${
                props.disabled ? "form__button_disabled" : ""
            }`}
        >
            {props.disabled ? <Spinner /> : "Оставить заявку"}
        </button>
    );
}
