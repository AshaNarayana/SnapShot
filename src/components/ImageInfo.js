import React from "react";
import MapContainer from "./MapContainer";
import ImageDetails from "./ImageDetails";

const ImageInfo = (props) => {
  console.log("props", props);
  if (props.location.aboutProps) {
    const latitude = props.location.aboutProps.latitude;
    const longitude = props.location.aboutProps.longitude;
    const title = props.location.aboutProps.title;
    const owner = props.location.aboutProps.owner;
    const url = props.location.aboutProps.url;

    return (
      <div className="row">
        <div className="column">
          <div className="row  ">
            <img
              src={url}
              alt={title}
              style={{ width: "300px", height: "150px", padding: "3px" }}
            />
          </div>
          <div className="row image-container-row ">
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
  } else {
    return (
      <div>
        <ul>No images found</ul>
      </div>
    );
  }
};

export default ImageInfo;
