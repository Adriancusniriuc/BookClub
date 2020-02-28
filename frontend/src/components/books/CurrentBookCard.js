import React from 'react'

const CurrentBookCard = ({ image, comments }) => (
    <section>
      <h1>Current Book</h1>
      <div>
      <p>{comments}</p>
        <img src={image}/>
      </div>
    </section> 

)

export default CurrentBookCard