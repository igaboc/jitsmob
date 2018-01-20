import React from 'react'

function classNameForWidth(width) {
  if (!width) {
    return 'col'
  }
  else {
    // e.g. col-6
    return `col-${width}`
  }
}

function classNameForBreakpoint(breakpoint, width) {
    if (!width) {     
      return ''
    }
    else if (width === true) {
      // e.g. col-sm
      return `col-${breakpoint}`
    }
    else {
      // e.g. col-sm-6
      return `col-${breakpoint}-${width}`
    }
  }

const Col = ({
  children,
  width,
  sm,
  md,
  lg,
  xl
}) => (
  <div className={ [
    classNameForWidth(width),
    classNameForBreakpoint('sm', sm),
    classNameForBreakpoint('md', md),
    classNameForBreakpoint('lg', lg),
    classNameForBreakpoint('xl', xl)
    ].join('')}>
    { children }
  </div>
)

export default Col