import React from 'react'

const MemberCard = ({ username, image })  => (
    <section>
      <h1>Member Card</h1>
      <p>{username}</p>
      
      <img src={image}/>
       

    </section> 

)

export default MemberCard