import React from 'react'

export default function ItemDescription(props) {
  const { description } = props

  return (
    <div>
      <p className='item-description'>{description}</p>
    </div>
  )
}
