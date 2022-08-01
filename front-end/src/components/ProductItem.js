import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const history = useHistory();
  const { tittle, price, type, id, onDelete } = props;
  return (
    
    <div class="column is-4-tablet is-4-dekstop" >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5">{tittle}</p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">{type}</p>
            <p class="card-footer-item">{price}</p>
          </footer>
          <footer class="card-footer">
            <div class="card-footer-item">
              <div class="icon-text">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
                <span>Success</span>
              </div>
            </div>
          </footer>
          <footer class="card-footer">
            <p class="card-footer-item">Pencuci Bejo</p>
          </footer>
          <footer class="card-footer">
            <Link to={`/edit/${id}`} class="card-footer-item">Edit</Link>
            <Link class="card-footer-item" onClick={() =>  onDelete(id)}>Delete</Link>
          </footer>
        </div>
      </div>
    
  )
}

export default ProductItem