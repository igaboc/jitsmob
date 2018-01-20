import React from 'react'

const Container = ({
  children,
  fluid
}) => (
  <div className={ fluid ? 'container-fluid' : 'container' }>
    { children }
  </div>
)

export default Container