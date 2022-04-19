import React from 'react'
import Product from '../Product/Product'
import './ProductList.css'
import {products} from '../../../src/data'
const ProductList = () => {
  return (
    <>
      <div className="pl">
          <div className="pl-info">
              <h1 className="pl-title">Create & Share</h1>
              <p className="pl-body">Some of the tools i used for creating my portfolio</p>
               <div className="pl-card">
                   {
                       products.map((item)=>(
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))
                   }
               </div>
          </div>
      </div>
    </>
  )
}

export default ProductList