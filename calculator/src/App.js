import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import * as axios from "axios";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 10,
            autoPrice: 3300000,
            months: 60,
            initial: 0,
            monthlyPayment: 0,
            contractAmount: 0,
            disabled: false,
        };
    }

    componentDidMount() {
        this.getInitial();
        this.getMonthlyPayment();
        this.getContractAmount();
    }

    getInitial = () => {
        const initial = (this.state.percent * this.state.autoPrice) / 100;
        this.setState(
            { initial },
            this.getMonthlyPayment,
            this.getContractAmount
        );
    };

    getMonthlyPayment = () => {
        let monthlyPayment = Math.round(
            (this.state.autoPrice - this.state.initial) *
                ((0.035 * Math.pow(1 + 0.035, this.state.months)) /
                    (Math.pow(1 + 0.035, this.state.months) - 1))
        );
        this.setState({ monthlyPayment }, this.getContractAmount);
    };

    getContractAmount = () => {
        const contractAmount =
            this.state.initial + this.state.months * this.state.monthlyPayment;
        this.setState({ contractAmount });
    };

    onClickHeader = () => {
        if (this.state.disabled) {
            this.setState({ disabled: false });
        }
    };

    onBlurPrice = (event) => {
        if (event.target.rawValue < 1000000) {
            this.setState(
                {
                    autoPrice: 1000000,
                },
                this.getInitial,
                this.getMonthlyPayment
            );
        } else if (event.target.rawValue > 6000000) {
            this.setState(
                {
                    autoPrice: 6000000,
                },
                this.getInitial,
                this.getMonthlyPayment
            );
        }
    };

    onChangePrice = (event) => {
        this.setState(
            {
                autoPrice: !event.target.rawValue.match(/\d/)
                    ? ""
                    : Number(event.target.rawValue),
            },
            this.getInitial,
            this.getMonthlyPayment
        );
    };

    onChangePriceRange = (event) => {
        this.setState(
            {
                autoPrice: event,
            },
            this.getInitial,
            this.getMonthlyPayment
        );
    };

    onBlurPercent = (event) => {
        if (event.target.value < 10) {
            this.setState({ percent: 10 }, this.getInitial);
        } else if (event.target.value > 60) {
            this.setState({ percent: 60 }, this.getInitial);
        }
    };
    onChangePercent = (event) => {
        this.setState(
            {
                percent: !event.target.value.match(/\d/)
                    ? ""
                    : Number(event.target.value),
            },
            this.getInitial
        );
    };
    onChangePercentRange = (event) => {
        this.setState({ percent: event }, this.getInitial);
    };

    onBlurMonth = (event) => {
        if (event.target.rawValue < 1) {
            this.setState(
                { months: 1 },
                this.getMonthlyPayment,
                this.getContractAmount
            );
        } else if (event.target.rawValue > 60) {
            this.setState(
                { months: 60 },
                this.getMonthlyPayment,
                this.getContractAmount
            );
        }
    };

    onChangeMonth = (event) => {
        this.setState(
            {
                months: !event.target.rawValue.match(/\d/)
                    ? ""
                    : Number(event.target.rawValue),
            },
            this.getMonthlyPayment,
            this.getContractAmount
        );
    };
    onChangeMonthRange = (event) => {
        this.setState(
            { months: event },
            this.getMonthlyPayment,
            this.getContractAmount
        );
    };

    onSubmit = (event) => {
        const data = { ...this.state };
        event.preventDefault();
        if (!this.state.disabled) {
            this.setState({ disabled: true });
            axios({
                method: "POST",
                url: "https://eoj3r7f3r4ef6v4.m.pipedream.net",
                data: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
        }
    };

    render() {
        return (
            <React.Fragment>
                <Header onClickHeader={this.onClickHeader} />
                <Form
                    percent={this.state.percent}
                    autoPrice={this.state.autoPrice}
                    months={this.state.months}
                    initial={this.state.initial}
                    onChangePrice={this.onChangePrice}
                    onChangePercent={this.onChangePercent}
                    onChangeMonth={this.onChangeMonth}
                    monthlyPayment={this.state.monthlyPayment}
                    contractAmount={this.state.contractAmount}
                    onChangePriceRange={this.onChangePriceRange}
                    onChangePercentRange={this.onChangePercentRange}
                    onChangeMonthRange={this.onChangeMonthRange}
                    onBlurPrice={this.onBlurPrice}
                    onBlurPercent={this.onBlurPercent}
                    onBlurMonth={this.onBlurMonth}
                    defaultvalue={this.state.defaultvalue}
                    onSubmit={this.onSubmit}
                    disabled={this.state.disabled}
                />
            </React.Fragment>
        );
    }
}
