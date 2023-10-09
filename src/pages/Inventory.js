import React from 'react'

var URLsearch = window.location.hash;

function Inventory() {
  let elements=URLsearch.split(',')

  return (
    <div>
      {elements.map((index) => (
              <p>{index}</p>
          ))}
    </div>

  )
}

export default Inventory