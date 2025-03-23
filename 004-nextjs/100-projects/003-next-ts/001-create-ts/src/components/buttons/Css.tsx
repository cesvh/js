import React from 'react'

type ButtonPropsCss = {
    style: React.CSSProperties;
}

function Css( {style}: ButtonPropsCss) {
  return (
    <button style={style}>
      Button CSS
    </button>
  )
}

export default Css