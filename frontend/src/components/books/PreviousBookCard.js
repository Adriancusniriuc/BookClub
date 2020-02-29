import React from 'react'
import { Link } from 'react-router-dom'

const PreviousBookCard = ({ image, title, id, name }) => (
  
      <Link to={`/books/${id}`}>
        {/* <h1>{title}</h1> */}
        <img className="prev-book-pic" alt={name} src={image}/>
      </Link>
)

export default PreviousBookCard