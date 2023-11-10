import React from 'react'
import './Cart.css'

function Cart() {
  return (
        <div className="Cart">
            <div className="CartLeft">
                {
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" className='CartAd' alt=""/>
                }
                <div>
                    <h2>Your Cart is Empty</h2>
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG5.png" alt="" className='CartEmptyImg'/>
                </div>
            </div>

        </div>
  )
}

export default Cart