import React from 'react'
import { Link } from 'react-router-dom'

const CurrentBookCard = ({ image, id, title }) => (
    <>
    {image !== undefined ?
    <Link to={`/books/${id}`}>
      <img className="current-book-pic" alt={title} src={image}/>
    </Link>
    :
    <div className="current-book-pic empty">
      <p>Add your current read!</p>
    </div>
    }
    </>
)

export default CurrentBookCard