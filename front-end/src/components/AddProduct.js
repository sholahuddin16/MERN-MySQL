import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('makanan');
  const [price, setPrice] = useState('');

  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products', {
      title: title,
      type: type,
      price: price
    });
    history.push("/")
  }

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input className="input" type="text" placeholder="Tiltle" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="field">
          <label className="label">Type :</label>
          <div class="select is-link">
            <select onChange={(e) => setType(e.target.value)}>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Harga</label>
          <input className="input" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="field">
          <button className="button is-primary mt-2">Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct