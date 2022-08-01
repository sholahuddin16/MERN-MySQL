import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');

    const history = useHistory();

    const { id } = useParams();

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setType(response.data.type);
        setPrice(response.data.price);
    }

    useEffect(() => {
        getProductById();
    }, []);

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`, {
            title: title,
            type: type,
            price: price
        });
        history.push("/")
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder="Tiltle" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="field">
                    <label className="label">Type :</label>
                    <div class="select is-link">
                        <select onChange={(e) => setType(e.target.value)}>
                            <option>Ubah Type</option>
                            <option value="makanan">Makanan</option>
                            <option value="minuman">Minuman</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input className="input" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="field">
                    <button className="button is-primary mt-2">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct