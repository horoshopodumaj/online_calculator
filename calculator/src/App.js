import React from "react";
import Header from "./components/Header";

function App() {
    return (
        <React.Fragment>
            <Header />
            <form id="form" className="form">
                <div className="container">
                    <div className="form__wrapper">
                        <label class="param form__param">
                            <p class="param__title">Стоимость автомобиля</p>
                            <div class="param__details">
                                <input
                                    type="text"
                                    class="param__value"
                                    value="3 300 000"
                                    inputmode="decimal"
                                    id="input-cost"
                                />
                                <h2 className="param__mark">₽</h2>
                            </div>
                            <div
                                class="param__range-slider"
                                id="slider-cost"
                            ></div>
                        </label>

                        <label class="param">
                            <p class="param__title">Первоначальный взнос</p>
                            <div class="param__details">
                                <input
                                    type="text"
                                    class="param__value"
                                    value="420 000 ₽"
                                    id="input-downpayment"
                                />
                                <p className="param__mark">13%</p>
                            </div>
                            <div class="param__range-slider"></div>
                        </label>

                        <label class="param">
                            <p class="param__title">Срок лизинга</p>
                            <div class="param__details">
                                <input
                                    type="text"
                                    class="param__value"
                                    value="60"
                                    id="input-term"
                                />
                                <p className="param__mark">мес.</p>
                            </div>
                            <div class="param__range-slider"></div>
                        </label>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default App;
