import React from 'react'
import {useParams} from "react-router-dom"
import {client, urlFor} from "../client"
import {useState, useEffect} from "react"
import {BsArrowRightCircle} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"
import { productQuery, searchQuery } from '../utils/data'
import './ProductPage.scss'
import "../App.css"
import ProductModal from '../components/Product/ProductModal'


const ProductPage = () => {
  const [productData, setProductData] = useState(null)
  const [currentImageIndex, setCurrentImageIndex ] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const params = useParams()
  
  useEffect(() => {
    const query = productQuery(params.productId)

    client.fetch(query)
    .then(data => {
      setProductData(data[0]) 
      console.log(data[0])
    })
    .catch(err => console.log(err))

  }, [])
  
  function showPrev() {
    setCurrentImageIndex(prev => {
      if(prev === 0) {
        return 0
      } else {
        return prev-1
      }
    })
  }

  function showNext() {
    setCurrentImageIndex(prev => {
      if(prev === productData.images.length-1) {
        return [prev]
      } else {
        return prev+1
      }
    })
  }

  return (
    <div>
      {productData !== null && (
        <div className="container">
          <div className="product">
            <div className="product-img">
    <button className="prev-btn" onClick={showPrev}><BsArrowLeftCircle size={30}/></button>
    <button className="next-btn" onClick={showNext}><BsArrowRightCircle size={30}/></button>
      <img src={urlFor(productData.images[currentImageIndex].asset._ref).url()} onClick={() => setIsOpen(true)}/>
      <ProductModal open={isOpen}>
        <div className="modal">
        <img src={urlFor(productData.images[currentImageIndex].asset._ref).url()} className="modal-img"/>
        <button onClick={() => setIsOpen(false)} className="times-btn"><FaTimes/></button>
        </div>
        </ProductModal>
      
      <div className="product-img-preview-container">
        {productData.images.map(image => {
          return <img onClick={() => {setCurrentImageIndex(productData.images.indexOf(image))}} key={image.asset._ref} className="product-img-preview" src={urlFor(image.asset._ref).url()}/>
        })}
      </div>
            </div>
            <div className="product-info">
              <h1>{productData.name}</h1>
              <p className="product-price">{productData.price.toFixed(2)} Lei</p>
            
            
            
              <div className="product-desc">
              <p>Canapea de 3 locuri extensibila  Sistem de extensie spatar rabatabil si sezut culisant cu rotile
Lada pentru depozitare  maxim 5 kg uniform distribuite pe toata suprafata</p>
              <div>
              <p >DIMENSIUNI</p>
              <p>Lungime 260 cm</p>
<p>Adancime 113cm</p>
<p>Inaltime 90 cm ( cu perne )</p>
<p>Suprafata de dormit 160 cm x 200 cm</p>

<p>*cotele de gabarit ale produsului finit pot sa difere cu +/- 3 cm</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage