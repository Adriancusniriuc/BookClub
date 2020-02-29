import React from 'react'

const MemberCard = ({ username, image })  => (
    <section>
      <h1>Member Card</h1>
      <p>{username}</p>
      <img alt="member" src={image}/>
    </section> 

)

export default MemberCard