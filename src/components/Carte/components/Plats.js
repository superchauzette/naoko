import React from 'react'
import Plat from './Plat'

const Plats = ({ plats }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}
  >
    {plats.map(plat => (
      <div style={{ marginRight: '10px', marginBottom: '25px', width: '22%' }}>
        <Plat plat={plat} />
      </div>
    ))}
  </div>
)

export default Plats
