import React from "react";

class Welcome extends React.Component {

    render() {
        return <p>Hello {this.props.name} !</p>;
    }
}

export default Welcome;