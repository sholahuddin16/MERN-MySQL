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
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>
                    </div>

                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>

                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="level-item">
                            <div class="field has-addons">
                                <p class="control">
                                    <input class="input" type="text" placeholder="Cari menu" />
                                </p>
                                <p class="control">
                                    <button class="button">
                                        Search
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-body">
                <Link to="/add" className="button is-primary is-large mt-2">Add New</Link>
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