import React from 'react'

const Nav = ({ navData, onClick }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {navData.map(data => (
      <p
        style={{
          marginRight: '10px',
          padding: '10px',
          border: '2px solid #999',
          color: '#999',
          cursor: 'pointer',
        }}
        onClick={() => onClick(data.key)}
      >
        {data.label}
      </p>
    ))}
  </div>
)

export default Nav
