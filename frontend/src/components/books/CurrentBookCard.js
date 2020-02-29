import React from 'react'
import { Link } from 'react-router-dom'

const CurrentBookCard = ({ image, comments, id }) => (
    <section>
      <h1>Current Book</h1>
      <div>
      <p>{comments}</p>
      <Link to={`/books/${id}`}>
        <img src={image}/>
        </Link>
      </div>
    </section> 

)

export default CurrentBookCard