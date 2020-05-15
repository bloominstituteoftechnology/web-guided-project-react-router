import React from 'react'
// We'll need quite a few imports from react-router-dom

import ItemDescription from './ItemDescription'
import ItemShipping from './ItemShipping'

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props

  const item = {} // We well need to pull item from items, using a parameter in the URL (:itemID)

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        {/* Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}
      </nav>

      {/* Here go the Routes for `<current path>/shipping` and `<current path>/description` */}
      {/* These Routes should render <ItemShipping /> and <ItemDescription /> respectively */}
    </div>
  )
}
