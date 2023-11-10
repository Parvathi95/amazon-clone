import React from 'react'
import './Products.css'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

function Products({title,price,image,rating}) {
  let halfRating=(rating-Math.floor(rating))*10;
  let outline=0;
  halfRating > 0 ? 
  (outline=5-Math.ceil(rating))
  :(outline=5-Math.floor(rating)); 
  return (
    <>
    <div className='Products'>
        <img src={image} alt={title} />
        <div className="Products_Info">
            <p>{title}</p>
            <div className="Product_Group">
                <p className="Product_Price">
                    <small>$.</small>
                    <strong>{price}</strong>
                </p>
                <div className="Product_Rating">
                 {Array(Math.floor(rating)).fill().map((_,index)=>(
                  <StarIcon key={index}/>
                ))}
                {halfRating > 0 ? <StarHalfIcon/>:<></>}
                {outline > 0? Array(outline).fill().map((_,index)=><StarOutlineIcon key={index}/>):""} 
                </div>
            </div>
        </div>
        <button>Add To Cart</button>
    </div>
  
    </>
  )
}

export default Products