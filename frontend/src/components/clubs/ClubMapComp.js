import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

import MapGL, { Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import { Link } from 'react-router-dom'

const ClubMapComp = ({
    viewport,
    handleGeocoderViewportChange,
    handleViewportChange,
    mapboxToken,
    mapRef,
    postcodes,
    clubs
  }) => (
    <MapGL
    mapboxApiAccessToken={mapboxToken}
    ref={mapRef}
    {...viewport}
    height={'80vh'}
    width={'80vw'}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    onViewportChange={handleViewportChange}
  >
    <Geocoder
      mapRef={mapRef}
      onViewportChange={handleGeocoderViewportChange}
      mapboxApiAccessToken={mapboxToken}
    />
    {postcodes.map((postcode, index) => {
      return (
        <Marker
          key={index}
          latitude={postcode.result.latitude}
          longitude={postcode.result.longitude}
        >
                
            {clubs.map((club, i) => {
              return club.postcode === postcode.query ? (
                <Link key={i} to={`/clubs/${club.id}`}>
                  <div>
                    <img className="marker" alt="bookclub-marker" src='https://image.flaticon.com/icons/svg/29/29302.svg' />
                  </div>
                </Link>
              ) : null
            })}
          
        </Marker>
      )
    })}
  </MapGL>


  )

export default ClubMapComp

