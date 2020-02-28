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
    height={'100vh'}
    width={'100vw'}
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
                <button className="marker">
            {clubs.map((club, i) => {
              return club.postcode === postcode.query ? (
                <Link key={i} to={`/clubs/${club.id}`}>
                  <div>
                    <img src='https://image.flaticon.com/icons/svg/29/29302.svg' />
                  </div>
                </Link>
              ) : null
            })}
          </button>
        </Marker>
      )
    })}
  </MapGL>


  )

export default ClubMapComp

