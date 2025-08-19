import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>"Our dishes are crafted with care, inspired by timeless recipes and fresh seasonal ingredients.
From sizzling appetizers to mouth-watering mains and indulgent desserts, every plate tells a story of flavor and passion.
Whether you crave something comforting and familiar or bold and adventurous, our menu has something to excite every taste bud.
Each dish is more than just food—it’s our way of sharing joy, one serving at a time."</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu