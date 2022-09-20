import React from 'react'

function RandomNumber(props) {
  if (props.number < 5) {
    throw new Error();
  }
  return (
    <div>
      <h3>{props.number}</h3>
    </div>
  )
}

export default RandomNumber