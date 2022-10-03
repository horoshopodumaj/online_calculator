import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 10,
            autoPrice: 3300000,
            months: 60,
            interestRate: 0.035,
            initial: 0,
            monthlyPayment: 0,
            contractAmount: 0,
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
                    Math.pow(1 + 0.035, this.state.months - 1))
        );
        this.setState({ monthlyPayment }, this.getContractAmount);
    };

    getContractAmount = () => {
        const contractAmount =
            this.state.initial + this.state.months * this.state.monthlyPayment;
        this.setState({ contractAmount });
    };

    onBlurPrice = (event) => {
        if (event.target.value < 1000000) {
            this.setState(
                {
                    autoPrice: 1000000,
                },
                this.getInitial,
                this.getMonthlyPayment
            );
        } else if (event.target.value > 6000000) {
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
                autoPrice: !event.target.value.match(/\d/)
                    ? ""
                    : Number(event.target.value),
            },
            this.getInitial,
            this.getMonthlyPayment
        );
    };

    onChangePriceRange = (event) => {
        this.setState(
            {
                autoPrice: event.target.ariaValueNow,
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
        this.setState({ percent: event.target.ariaValueNow }, this.getInitial);
    };

    onBlurMonth = (event) => {
        if (event.target.value < 1) {
            this.setState(
                { months: 1 },
                this.getInitial,
                this.getContractAmount
            );
        } else if (event.target.value > 60) {
            this.setState(
                { months: 60 },
                this.getInitial,
                this.getContractAmount
            );
        }
    };

    onChangeMonth = (event) => {
        this.setState(
            {
                months: !event.target.value.match(/\d/)
                    ? ""
                    : Number(event.target.value),
            },
            this.getMonthlyPayment,
            this.getContractAmount
        );
    };
    onChangeMonthRange = (event) => {
        this.setState(
            { months: event.target.ariaValueNow },
            this.getMonthlyPayment,
            this.getContractAmount
        );
    };

    render() {
        return (
            <React.Fragment>
                <Header />
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
                />
            </React.Fragment>
        );
    }
}
