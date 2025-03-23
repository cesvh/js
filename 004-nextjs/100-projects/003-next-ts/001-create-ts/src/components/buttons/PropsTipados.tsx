import React from 'react'

function PropsTipados(props: { text: string, subtitle: string, color: string }) {
  return (
    <button>PropsTipados {props.text} - {props.subtitle} - {props.color}</button>
  )
}

export default PropsTipados