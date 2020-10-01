import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const MapContainer = ({ longitude, latitude, title }) => {
  const lon = parseInt(longitude);
  const lat = parseInt(latitude);
  if (lon !== 0 && lat !== 0) {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBarubOh2orvI1jq1T9F_9OZ7bcD_tqwer" }}
          defaultZoom={8}
          defaultCenter={{ lat: lat, lng: lon }}
        >
          <Marker lat={lat} lng={lon} name={title} color="red" />
        </GoogleMapReact>
      </div>
    );
  } else return <div className="map-container"> Location not found</div>;
};

export default MapContainer;
