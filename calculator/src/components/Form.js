import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "./Button";
import SummaryItem from "./SummaryItem";

export default function Form(props) {
    return (
        <form id="form" className="form" onSubmit={props.onSubmit}>
            <div className="container">
                <div className="form__wrapper">
                    <label
                        className={`param form__param ${
                            props.disabled ? "param_disabled" : ""
                        }`}
                    >
                        <p className="param__title">Стоимость автомобиля</p>
                        <div className={`param__details`}>
                            <input
                                disabled={props.disabled}
                                type="text"
                                autoComplete="off"
                                className="param__value"
                                value={props.autoPrice}
                                inputMode="decimal"
                                name="price"
                                id="input-cost"
                                onChange={props.onChangePrice}
                                onBlur={props.onBlurPrice}
                            />
                            <p className="param__mark">₽</p>
                        </div>
                        <Slider
                            disabled={props.disabled}
                            className={`slider ${
                                props.disabled ? "rc-slider-disable" : ""
                            }`}
                            value={props.autoPrice}
                            min={1000000}
                            max={6000000}
                            step={100}
                            onChange={props.onChangePriceRange}
                        />
                    </label>

                    <label
                        className={`param ${
                            props.disabled ? "param_disabled" : ""
                        }`}
                    >
                        <p className="param__title">Первоначальный взнос</p>
                        <div
                            className={`param__details param__details_percent`}
                        >
                            <div className="param__value">
                                {props.initial} ₽
                            </div>
                            <div className="param__percent">
                                <input
                                    disabled={props.disabled}
                                    className="param__input"
                                    id="input-downpayment"
                                    type="text"
                                    inputMode="decimal"
                                    value={props.percent}
                                    onChange={props.onChangePercent}
                                    onBlur={props.onBlurPercent}
                                />
                                <p className="param__mark_percent">%</p>
                            </div>
                        </div>
                        <Slider
                            disabled={props.disabled}
                            className={`slider ${
                                props.disabled ? "rc-slider-disable" : ""
                            }`}
                            value={props.percent}
                            min={10}
                            max={60}
                            step={1}
                            onChange={props.onChangePercentRange}
                        />
                    </label>

                    <label
                        className={`param ${
                            props.disabled ? "param_disabled" : ""
                        }`}
                    >
                        <p className="param__title">Срок лизинга</p>
                        <div className={`param__details`}>
                            <input
                                disabled={props.disabled}
                                type="text"
                                autoComplete="off"
                                className="param__value"
                                value={props.months}
                                onChange={props.onChangeMonth}
                                onBlur={props.onBlurMonth}
                            />
                            <p className="param__mark">мес.</p>
                        </div>
                        <Slider
                            disabled={props.disabled}
                            className={`slider ${
                                props.disabled ? "rc-slider-disable" : ""
                            }`}
                            value={props.months}
                            min={1}
                            max={60}
                            step={1}
                            onChange={props.onChangeMonthRange}
                        />
                    </label>
                </div>
                <div className="summary form__summary">
                    <SummaryItem
                        disabled={props.disabled}
                        title={"Сумма договора лизинга"}
                        value={props.contractAmount}
                    />
                    <SummaryItem
                        disabled={props.disabled}
                        title={"Ежемесячный платеж от"}
                        value={props.monthlyPayment}
                    />

                    <Button disabled={props.disabled} />
                </div>
            </div>
        </form>
    );
}
