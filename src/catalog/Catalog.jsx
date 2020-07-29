import React, { useState, useEffect } from "react";
import ProductThumb from "./ProductThumb";
import { Link } from "react-router-dom";


function Catalog(props) {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            fetch("/data/products.json").then(
                (response) => {
                    if (response.status === 200) {
                        response.json().then(
                            (productsTab) => setProducts(productsTab),
                            (error) => alert("error:" + error)
                        );
                    }
                },
                (error) => alert("error:" + error)
            );
        },
        []
    );



    return (
        <>
            {
                products.map(
                    (currentProduct, index) => {
                        return (
                            <Link to={"/detail/" + currentProduct.id}>
                                <ProductThumb key={index} {...currentProduct} />
                            </Link>
                        )
                    }
                )
            }
        </>
    )
}


export default Catalog;