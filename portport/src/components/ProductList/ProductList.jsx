import React from 'react'
import './ProductList.css';
import Product from '../Product/Product';
import {products} from '../../Data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-text">
          <h1 className= 'pl-title'> Create & Inspire. It's our future</h1>
          <p className='pl-desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum quasi accusantium ea qui excepturi,
               laudantium molestiae fugit ad consequatur inventore nesciunt ipsam alias est natus? Nobis perspiciatis provident adipisci?
          </p>
      </div>
      <div className="pl-list">
          {products.map((item) => (
              <Product 
                key = {item.id}
                img = {item.img}
                link = {item.link}
              />
          ))}
          
      </div>
    </div>
  )
}

export default ProductList;
