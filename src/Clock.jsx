import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: props.locale,
            hidden: false
        };
    }

    componentDidMount = () => {
        this.timer = window.setInterval(this.refresh, 1000);
    };

    componentWillUnmount = () => {
        window.clearInterval(this.timer);
    };

    clickHandler = () => {
        this.setState({hidden: !this.state.hidden });
    };

    refresh = () => {
        this.setState({date: new Date()});
    };

    render = () => {
        return (
            <>
                <button onClick={this.clickHandler}>{this.state.hidden ? "Afficher" : "Cacher"}</button>
                { !this.state.hidden && <p>{this.state.date.toLocaleTimeString(this.state.locale)}</p>}
            </>
        );
    };
}

export default Clock;