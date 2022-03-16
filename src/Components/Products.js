import React from 'react'
import { Product } from './Product'
import {products} from './Data/ProductData'




export const Products = () => {
  return (
    <section className='products' id='products' >
        <h1 className='heading'> <span>our</span>products</h1>
        <div className='productgallery'>
            {
              products.map((theProduct,i) => <Product key={i} product={theProduct}  /> )
            }
        </div>
    </section>
    
  )
}
