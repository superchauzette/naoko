import React from 'react'

const style = { color: '#999' }

export default ({ children, ...props }) => (
  <h1 style={style} {...props}>
    {children}
  </h1>
)
