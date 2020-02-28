import React from 'react'

const CurrentBookCard = ({ image }) => (
    <section>
      <h1>Current Book</h1>
      <div>

        <img src={image}/>
      </div>
    </section> 

)

export default CurrentBookCard