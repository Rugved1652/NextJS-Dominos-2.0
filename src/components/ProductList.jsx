import React from 'react'
import styles from '../styles/Product.module.css'
import ProductCard from './ProductCard'
function ProductList({PizzaList}) {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
      in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit.
    </p>
    <div className={styles.wrapper}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
    </div>
  </div>

  )
}

export default ProductList