import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { name, seller, img, ratings, price } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>
            <p className='seller'><small>Manufacturer: <strong>{seller}</strong></small></p>
            <p className='rating'><small>{ratings} Star</small></p>
            <button onClick={() => handleAddToCart(product)} className='button'>
                <p className='btn-text'>Add To Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;