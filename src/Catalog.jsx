import React from "react";
import ProductThumb from "./ProductThumb";
class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount = () => {
        fetch("/data/products.json").then(

            (response) => {

                if (response.status === 200) {

                    response.json().then(

                        (productsTab) => {
                            this.setState(
                                {
                                    products: productsTab
                                }
                            )
                        }, 

                        (error) => {
                            alert("error:" + error);
                        }

                    );

                }
                else{
                    console.log(response.status);
                }
            },

            (error) => {
                alert("error:" + error);
            }

        );
    };

    addProductToCart = (productName) => {
        alert(productName + " a été ajouté au panier");
    };

    render = () => {
        return (
            <>
                {
                    this.state.products.map(

                        (currentProduct, index) => {

                            return <ProductThumb key={index} {...currentProduct} add={this.addProductToCart} />

                        }

                    )
                }

            </>
        )
    }
}
export default Catalog;