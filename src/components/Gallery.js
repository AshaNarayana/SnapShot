import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let latitude = image.latitude;
      let longitude = image.longitude;
      let owner = image.owner;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

      return (
        <Image
          url={url}
          key={id}
          photoId={id}
          title={title}
          longitude={longitude}
          latitude={latitude}
          owner={owner}
        />
      );
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
