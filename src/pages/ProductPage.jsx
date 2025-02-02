import {Breadcrumb} from "antd";
import {useEffect, useState} from "react";
import {fetchAllProducts} from "../api/product.api";
import Product from "../components/Product";
import './ProductPage.css';

function ProductPage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchAllProducts().then(products => setProducts(products)).catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <div className={'productsList'}>
                {products && (
                    products.map((product, index) => (
                        <Product key={index} product={product}/>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductPage;
