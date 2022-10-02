import React from "react";

export default function Form(props) {
    return (
        <form id="form" className="form">
            <div className="container">
                <div className="form__wrapper">
                    <label className="param form__param">
                        <p className="param__title">Стоимость автомобиля</p>
                        <div className="param__details">
                            <input
                                type="text"
                                autoComplete="off"
                                className="param__value"
                                defaultValue={props.autoPrice}
                                inputMode="decimal"
                                id="input-cost"
                                onChange={props.onChangePrice}
                            />
                            <p className="param__mark">₽</p>
                        </div>
                        <div
                            className="param__range-slider"
                            id="slider-cost"
                        ></div>
                    </label>

                    <label className="param">
                        <p className="param__title">Первоначальный взнос</p>
                        <div className="param__details param__details_percent">
                            <div className="param__value">
                                {props.initial} ₽
                            </div>
                            <div className="param__percent">
                                <input
                                    className="param__input"
                                    id="input-downpayment"
                                    type="text"
                                    inputMode="decimal"
                                    defaultValue={props.percent}
                                    onChange={props.onChangePercent}
                                />
                                <p className="param__mark_percent">%</p>
                            </div>
                        </div>
                        <div className="param__range-slider"></div>
                    </label>

                    <label className="param">
                        <p className="param__title">Срок лизинга</p>
                        <div className="param__details">
                            <input
                                type="text"
                                autoComplete="off"
                                className="param__value"
                                defaultValue={props.months}
                                onChange={props.onChangeMonth}
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
                            {props.contractAmount}
                            <span> ₽</span>
                        </div>
                    </div>

                    <div className="summary__item">
                        <div className="summary__title">
                            Ежемесячный платеж от
                        </div>
                        <div className="summary__value" id="total-percent">
                            {props.monthlyPayment}
                            <span> ₽</span>
                        </div>
                    </div>

                    <button type="submit" className="form__button">
                        Оставить заявку
                    </button>
                </div>
            </div>
        </form>
    );
}
