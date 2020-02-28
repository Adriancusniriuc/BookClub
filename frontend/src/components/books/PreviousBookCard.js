import React from 'react'

const PreviousBookCard = ({ image, title }) => (
    <section>
      <h1>Previous Books</h1>
      <div>
        <h1>{title}</h1>
        <img src={image}/>
      </div>
    </section> 

)

export default PreviousBookCard