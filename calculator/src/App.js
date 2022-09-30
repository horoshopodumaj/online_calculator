import React from "react";
import Header from "./components/Header";

function App() {
    return (
        <React.Fragment>
            <Header />
            <form id="form" className="form">
                <div className="container">
                    <div className="form__wrapper">
                        <label className="param form__param">
                            <p className="param__title">Стоимость автомобиля</p>
                            <div className="param__details">
                                <input
                                    type="text"
                                    className="param__value"
                                    value="3 300 000"
                                    inputmode="decimal"
                                    id="input-cost"
                                />
                                <h2 className="param__mark">₽</h2>
                            </div>
                            <div
                                className="param__range-slider"
                                id="slider-cost"
                            ></div>
                        </label>

                        <label className="param">
                            <p className="param__title">Первоначальный взнос</p>
                            <div className="param__details">
                                <input
                                    type="text"
                                    className="param__value"
                                    value="420 000 ₽"
                                    id="input-downpayment"
                                />
                                <p className="param__mark">13%</p>
                            </div>
                            <div className="param__range-slider"></div>
                        </label>

                        <label className="param">
                            <p className="param__title">Срок лизинга</p>
                            <div className="param__details">
                                <input
                                    type="text"
                                    className="param__value"
                                    value="60"
                                    id="input-term"
                                />
                                <p className="param__mark">мес.</p>
                            </div>
                            <div className="param__range-slider"></div>
                        </label>
                    </div>
                    <div className="summary form__summary">
                        <div className="summary__item">
                            <div className="summary__title">
                                Сумма договора лизинга
                            </div>
                            <div
                                className="summary__value"
                                id="total-month-payment"
                            >
                                XXXX<span> ₽</span>
                            </div>
                        </div>

                        <div className="summary__item">
                            <div className="summary__title">
                                Ежемесячный платеж от
                            </div>
                            <div className="summary__value" id="total-percent">
                                XX<span> ₽</span>
                            </div>
                        </div>

                        <button type="submit" className="form__button">
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default App;
