import React from 'react'
import { urlFor } from '../../client'


const HeaderSlide = ({image, info, showPrev, showNext, _id}) => {
  return (
    <div className="slide">
    <img src={urlFor(image).url()}/>
    {info.split('.').length > 1 &&
    (
    <div className="banner-text">
    <h1 className="title">{info.split('.')[0]}</h1>
    <h1 className="info">{info.split('.')[1]}</h1>
    </div>
    )
   }
   {
    info.split('.').length === 0 && (
      <div className="banner-text">
      <h1 className="title">{info}</h1>
      </div>
    )
   }
    </div>
  )
}

export default HeaderSlide