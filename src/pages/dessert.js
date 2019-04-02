import React from 'react'

import dessert from '../img/dessert.png'

export default () => (
  <div style={{ backgroundColor: 'white', height: '100vh' }}>
    <h1>Dessert</h1>
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px',
        width: '500px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '40px' }}>
          <p>LD1 Nougat aux sésames 3,80€</p>
          <p>LD2 Perle de coco 3,80€ </p>
          <p>LD3 Gingembre confit 3,80€</p>
          <p>LD4 Lychée au sirop 3,80€</p>
        </div>
        <img src={dessert} />
      </div>
    </div>
  </div>
)
