import React from 'react'

const Row = ({
  children,
  className = '' // Undefined or string
}) => (
  <div className={ `row ${className}` }>
    { children }
  </div>
)

export default Row