import React from 'react'
import {urlFor} from "../../client"
import "./Product.scss"
import { Link } from 'react-router-dom'


const Product = ({product}) => {
  const {images, name, price, _id} = product;
   const image = images[0].asset._ref
  return (
    <div className="product-box-wrapper">
    <div className="product-box">
      <Link to={`${_id}`}><img src={urlFor(image).url()} loading='lazy'/></Link>
      <div className="product-box-info">
      <Link to={`${_id}`} className="product-name">{name}</Link>
      <p className="product-price">{price.toFixed(2)} Lei</p>
      </div>
    </div>
    </div>
  )
}

export default Product