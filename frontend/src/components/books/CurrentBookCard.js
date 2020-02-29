import React from 'react'
import { Link } from 'react-router-dom'

const CurrentBookCard = ({ image, id, name }) => (
  <div className="current-book">
    <h1>Current Book:</h1>
    <Link to={`/books/${id}`}>
      <img className="current-book-pic" alt={name} src={image}/>
    </Link>
  </div>
)

export default CurrentBookCard