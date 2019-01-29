import React from 'react'

const Card = ({title, body, ...props}) => (
  <div className="card large" {...props}>
    <div className="card-image">
      <figure className="image">
        <img src="https://raw.githubusercontent.com/imlinus/Vue-Magic-Grid/master/test/src/assets/foo.jpg" alt="Image"/>
      </figure>
    </div>

    <div className="card-content content">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
)

export default Card
