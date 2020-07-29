import React, { useEffect, useState } from "react";

function ProductDetail(props) {




    // on crée un état "produit"
    const [product, setProduct] = useState(null);

    // méthode pour ajouter au panier
    const addToCart = () => {
        props.add(props.match.params.id);
    };


    useEffect(
        () => {

            // on va chercher l'ensemble des produits sur le serveur
            fetch("/data/products.json").then(
                (response) => {
                    // on obtient une réponse que l' on interpète comme étant un json
                    response.json().then(
                        (data) => {
                            // une fois les données obtenues, on filtre le tableau
                            // ici, on crée un nouveau tableau qui contient l'ensemble des produits 
                            // dont l'id est équivalent à celui passé dans l'url (normalement il n'y en a qu'un)
                            const filtered = data.filter(cur => cur.id == props.match.params.id);
                            // vu que l'on obtient un tableau (avec normalement un seul élément à l'intérieur)
                            // on redéfinit notre "état" produit en lui donnant comme valeur la première entrée 
                            // du tableau d'élements filtrés (donc le produit en cours)
                            setProduct(filtered[0]);
                        }
                    )
                }
            );
        }

    );

    return (
        <>
            {
                product !== null && (
                    <>
                        <h2>{product.name}</h2>
                        <p>Prix: {product.price}</p>
                        <img src={product.img} alt={product.name} />
                        <button onClick={addToCart} >Ajouter au panier</button>
                    </>
                )
            }

        </>
    );
}


export default ProductDetail;