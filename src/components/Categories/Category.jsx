import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import {useNavigate} from "react-router-dom"

const Category = ({item}) => {
    const navigate = useNavigate()
  return (
    <div className={`category category-${item.name}`} onClick={() => navigate(`/categorie/${item.name}`)}>
    <div className="category-navigation">
    <button className="brown-btn btn" type="button">{item.name[0].toUpperCase() + item.name.substring(1)}<BsChevronRight/></button>    
    </div>  
     </div>
  )
}

export default Category