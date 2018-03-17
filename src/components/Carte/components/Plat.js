import React from 'react'

const Plat = ({ plat }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px',
      boxShadow: 'inset 0 0 1px 0 rgba(0,0,0,0.18)',
      backgroundColor: 'white',
    }}
  >
    <img src={plat.img} />
    <p style={{ margin: 0 }}>
      {plat.code} - {plat.prix}
    </p>
    <p>{plat.label}</p>
  </div>
)

export default Plat
