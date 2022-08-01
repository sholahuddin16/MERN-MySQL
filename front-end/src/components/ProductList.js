import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
        console.log(response.data);
    }

    const deleteProduct = async (id) => {
        const response = await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts(response.data);
    }


    return (
        <div className="content-wrapper">
            <div class="hero-body">
                <div class="container">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-large" type="search" />
                                    <span class="icon is-medium is-left">
                                        <i class="fa fa-search"></i>
                                    </span>
                                    <span class="icon is-medium is-right">
                                        <i class="fa fa-empire"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="container">
                <div class="columns">
                    {products.map(products => {
                        return <ProductItem
                            key={products.id}
                            //image={`http://localhost:4000/${blog.image}`}
                            tittle={products.title}
                            //body={blog.body}
                            type={products.type}
                            price={products.price}
                            //date={blog.createdAt}
                            id={products.id}
                            onDelete={deleteProduct}
                        />
                    })}
                </div>
            </section>
        </div>
    )
}

export default ProductList;