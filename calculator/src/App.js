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
                    (Math.pow(1 + 0.035, this.state.months) - 1))
        );
        this.setState({ monthlyPayment }, this.getContractAmount);
    };

    getContractAmount = () => {
        const contractAmount =
            this.state.initial + this.state.months * this.state.monthlyPayment;
        this.setState({ contractAmount });
    };

    onChangePrice = (event) => {
        this.setState(
            {
                autoPrice: parseInt(event.target.value),
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
    onChangePercent = (event) => {
        this.setState(
            { percent: parseInt(event.target.value) },
            this.getInitial
        );
    };
    onChangePercentRange = (event) => {
        this.setState({ percent: event.target.ariaValueNow }, this.getInitial);
    };

    onChangeMonth = (event) => {
        this.setState(
            { months: parseInt(event.target.value) },
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
                />
            </React.Fragment>
        );
    }
}
