import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const MapContainer = ({ longitude, latitude, title }) => {
  const lon = parseFloat(longitude);
  const lat = parseFloat(latitude);
  if (lon !== 0 && lat !== 0) {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultZoom={8}
          defaultCenter={{ lat: lat, lng: lon }}
        >
          <Marker lat={lat} lng={lon} name={title} />
        </GoogleMapReact>
      </div>
    );
  } else {
    return <div className="map-container-not-found"> Location not found</div>;
  }
};

export default MapContainer;
