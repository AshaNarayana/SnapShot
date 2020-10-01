import React from "react";
import MapContainer from "./MapContainer";
import ImageDetails from "./ImageDetails";

const ImageInfo = (props) => {
  const latitude = props.location.aboutProps.latitude;
  const longitude = props.location.aboutProps.longitude;
  const title = props.location.aboutProps.title;
  const owner = props.location.aboutProps.owner;
  return (
    <div className="row">
      <div className="column">
        <div className="row">Image</div>
        <div className="row">
          <ImageDetails
            longitude={longitude}
            latitude={latitude}
            title={title}
            owner={owner}
          />
        </div>
      </div>
      <div className="column" style={{ backgroundColor: "#D3D3D3" }}>
        <MapContainer
          longitude={longitude}
          latitude={latitude}
          isMarkerShown={true}
          title={title}
        />
      </div>
    </div>
  );
};

export default ImageInfo;
