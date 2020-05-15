import React from 'react'

export default function ItemShipping(props) {
  const { shipping } = props

  return (
    <div>
      <p className='item-description'>{shipping}</p>
    </div>
  )
}
