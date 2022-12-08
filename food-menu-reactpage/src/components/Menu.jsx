import React from 'react'

const Menu = ({ foodItems }) => {
  return (
    <div className='section-center'>
      {foodItems.map((item) => {
        const { title, img, desc, price, id } = item
        return (
          <div className='menu-item' key={id}>
            <img src={img} alt='item-1' className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <div className='item-text'>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
