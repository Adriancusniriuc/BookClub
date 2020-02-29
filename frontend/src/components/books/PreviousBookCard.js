import React from 'react'
import { Link } from 'react-router-dom'

const PreviousBookCard = ({ image, title, id }) => (
    <section>
      <h1>Previous Books</h1>
      <div>
      <Link to={`/books/${id}`}>
        <h1>{title}</h1>
        <img src={image}/>
      </Link>
      </div>
    </section> 

)

export default PreviousBookCard