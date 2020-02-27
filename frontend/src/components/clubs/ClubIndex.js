import React from 'react'
import ClubCard from './ClubCard'
import ClubMap from './ClubMap'

class ClubIndex extends React.Component {

  render() {

    return(
    <section>
      <h1>This is the index</h1>
      <ClubCard/>
      <ClubMap/>
    </section>
  )
  }

}

export default ClubIndex