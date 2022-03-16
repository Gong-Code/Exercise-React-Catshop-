import React from 'react'

export const Product = (props) => {
  return (
    <div className="productgallery_card">
      <div className="productgallery_card_container">
          <img src={props.product.image} alt="cookies" className="hero-image"/>
          <div className="information">

              <div className="name">{props.product.title}</div>

              <div className="store">{props.product.category}</div>

              <a href="#" className="storebutton">Purchase Product</a>

          </div>
      </div>
    </div>
  )
}
