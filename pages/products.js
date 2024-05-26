// pages/products.js

import React, { useState } from 'react';
import styles from '../styles/product.module.css';
import Navbar from '../components/Navbar'; // Import Navbar component

const ProductsPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to handle adding product to cart
  const handleAddToCart = (productName) => {
    setSelectedProducts([...selectedProducts, productName]);
  };

  // Function to check if product is selected
  const isSelected = (productName) => {
    return selectedProducts.includes(productName);
  };

  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <h1>Solent Productions</h1>
      <div className={styles.productsContainer}>
        {/* Product 1 */}
        <div className={isSelected('Product 1') ? `${styles.product} ${styles.selected}` : styles.product}>
          <button className={styles.productButton} onClick={() => handleAddToCart('Product 1')}>
            <h2 className={styles.productName}>Product 1</h2>
            <p className={styles.productPrice}>£9.99</p>
            <div className={styles.productDescription}>Description of Product 1 goes here</div>
          </button>
        </div>
        {/* Product 2 */}
        <div className={isSelected('Product 2') ? `${styles.product} ${styles.selected}` : styles.product}>
          <button className={styles.productButton} onClick={() => handleAddToCart('Product 2')}>
            <h2 className={styles.productName}>Product 2</h2>
            <p className={styles.productPrice}>£19.99</p>
            <div className={styles.productDescription}>Description of Product 2 goes here</div>
          </button>
        </div>
        {/* Product 3 */}
        <div className={isSelected('Product 3') ? `${styles.product} ${styles.selected}` : styles.product}>
          <button className={styles.productButton} onClick={() => handleAddToCart('Product 3')}>
            <h2 className={styles.productName}>Product 3</h2>
            <p className={styles.productPrice}>£29.99</p>
            <div className={styles.productDescription}>Description of Product 3 goes here</div>
          </button>
        </div>
        {/* Product 4 */}
        <div className={isSelected('Product 4') ? `${styles.product} ${styles.selected}` : styles.product}>
          <button className={styles.productButton} onClick={() => handleAddToCart('Product 4')}>
            <h2 className={styles.productName}>Product 4</h2>
            <p className={styles.productPrice}>£39.99</p>
            <div className={styles.productDescription}>Description of Product 4 goes here</div>
          </button>
        </div>
        {/* Product 5 */}
        <div className={isSelected('Product 5') ? `${styles.product} ${styles.selected}` : styles.product}>
          <button className={styles.productButton} onClick={() => handleAddToCart('Product 5')}>
            <h2 className={styles.productName}>Product 5</h2>
            <p className={styles.productPrice}>£49.99</p>
            <div className={styles.productDescription}>Description of Product 5 goes here</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
