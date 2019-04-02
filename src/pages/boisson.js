import React from 'react'
import Title from '../components/Title'

import boisson from '../img/boisson.png'

export default () => (
  <div style={{ backgroundColor: 'white', height: '100vh' }}>
    <Title>Boisson</Title>
    <div>
      <img src={boisson} />
    </div>
  </div>
)
