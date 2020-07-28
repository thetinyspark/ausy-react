import React from "react";

class ProductThumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addToCart = () => {
        this.props.add(this.props.name);
    };

    render = () => {
        return (
            <>
                <h2>{this.props.name}</h2>
                <p>Prix: {this.props.price}</p>
                <img src={this.props.img} alt={this.props.name} />
                <button onClick={this.addToCart} >Ajouter au panier</button>
            </>
        );
    };
}

export default ProductThumb;