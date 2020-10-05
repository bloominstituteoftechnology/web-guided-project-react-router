import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props

  // We'll grab the current URL using the hook

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <img
            className='items-list-image'
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
