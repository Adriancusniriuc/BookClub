import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

// import ClubCard from './ClubCard'
import ClubMapComp from './ClubMapComp'

class ClubIndex extends React.Component {
  state = {
    postcodes: null,
    clubs: null,
    viewport: {
      latitude: 51.5074,
      longitude: 0.1278,
      zoom: 9
    }
  }

  mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

  mapRef = React.createRef()
  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

    handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 }
    this.setState({
      viewport: {
        latitude: viewport.latitude,
        longitude: viewport.longitude,
        zoom: viewport.zoom
      }
    })
        return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }

  async componentDidMount() {
        try {
          const res = await axios.get('/api/clubs/')
          this.setState({ clubs: res.data })
          console.log(res.data)
          this.getPostcodes()
        } catch (error) {
          console.log(error)
        }
      }

  async getPostcodes() {
        const postcodes = this.state.clubs.map(club => {
          return club.postcode
        })
        const res = await axios.post(
          'https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes',
          { postcodes }
        )
        // console.log(res.data.result)
        this.setState({ postcodes: res.data.result })
      }

  render() {
    if (!this.state.postcodes) return null
    if (!this.state.clubs) return null
    // console.log('clubs', this.state.clubs)
    // console.log('postcodes', this.state.postcodes)
    return(
    <section>
      <h1>This is the index</h1>

    <div className="index" >
{/* 
    <div className="card-container">
          {this.state.clubs.map((club, i) => (
              <ClubCard key={i} {...club} />
            ))}
          </div> */}
<div>
            {/* {Authorization.isAuthenticated() ? */}
              <Link to="/clubs/create">
                <button
                  className="button"
                  type="button">Create club</button>
              </Link> 
               {/* : null */}
          </div>

          <div className="map-container">
            <ClubMapComp
              viewport={this.state.viewport}
              handleGeocoderViewportChange={this.handleGeocoderViewportChange}
              handleViewportChange={this.handleViewportChange}
              mapboxToken={this.mapboxToken}
              mapRef={this.mapRef}
              postcodes={this.state.postcodes}
              clubs={this.state.clubs}
            />
          </div>

          
          
         
        </div>

    </section>
  )
  }

}

export default ClubIndex


