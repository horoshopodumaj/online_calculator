import React from "react";

export default function Header(props) {
    return (
        <header className="header" onClick={props.onClickHeader}>
            <div className="container">
                <h1 className="header__title">
                    Рассчитайте стоимость автомобиля в лизинг
                </h1>
            </div>
        </header>
    );
}
