import React from 'react'
import {client, urlFor} from "../client"
import {useState, useEffect} from "react"
import { searchByCategoryQuery } from '../utils/data'
import {useParams} from "react-router-dom"
import Product from '../components/Product/Product'
import "./Products.scss"

const Products = () => {
const params = useParams()

const [products, setProducts] = useState(null)

  useEffect(() => {
    const query = searchByCategoryQuery(params.categoryName)
    
    client.fetch(query)
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="products-container container">
      {products?.map(product => {
      return <Product key={product._id} product={product}/>
    })}</div>
  )
}

export default Products