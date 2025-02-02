import {useEffect, useState} from "react";

function Produit() {

    const [produit, setProduit] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(data => setProduit(data))
            .catch(err =>console.log(err))

    })

        return (
            <div>
                <h1>Product List</h1>
                <ul>
                    {produit && (
                        produit.map((product,index) => (
                            <li key={index}>

                                <h2>{product.title}</h2>
                                <p>{product.price} </p>
                                <p>{product.description}</p>
                                <p>{product.images}</p>
                            </li>
                        ))
                    )}
                </ul>
            </div>

        )
    }

export default Produit