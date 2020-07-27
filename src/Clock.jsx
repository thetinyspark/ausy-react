import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: props.locale,
            counter: 0
        };
    }

    componentDidMount = () => {
        this.timer = window.setInterval(this.refresh, 1000);
    };

    componentWillUnmount = () => {
        window.clearInterval(this.timer);
    };

    clickHandler = () => {
        alert("coucou c'est moi, l'horloge avec la locale " + this.state.locale);
    };

    refresh = () => {
        this.setState(
            {
                date: new Date(),
                counter: this.state.counter + 1
            }
        );

        if (this.state.counter % 10 === 0) {
            this.props.coucou(this.state.locale);
        }
    };

    render = () => {
        return (
            <>
                <p>{this.state.date.toLocaleTimeString(this.state.locale)}</p>
                <button onClick={this.clickHandler}  >OK</button>
            </>
        );
    };
}

export default Clock;