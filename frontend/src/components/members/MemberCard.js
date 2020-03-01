import React from 'react'

const MemberCard = ({ username, image })  => (
      
        <div className="member-card">
          <img className="member-pic" alt="member" src={image}/>
          <p>{username}</p>
        </div>

)

export default MemberCard