import React from 'react'
import { Link } from 'react-router-dom'

const PreviousBookCard = ({ image, title, id }) => (
    <Link to={`/books/${id}`}>
      <img className="prev-book-pic" alt={title} src={image}/>
    </Link>
)

export default PreviousBookCard