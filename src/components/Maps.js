import React, { useState } from "react";
import NoImages from "./NoImages";
//import GeoLocation from "./GeoLocation";
import axios from "axios";
import { apiKey } from "../api/config";
const Gallery = (props) => {
  const results = props.data;
  let images;
  const [latitude, setLatitude] = useState("0");
  const [longitute, setLongitude] = useState("0");

  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map((image) => {
      console.log("image value", image);
      let id = image.id;

      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.geo.getLocation&api_key=${apiKey}&photo_id=${id}`
        )
        .then((response) => {
          //  console.log("response", response.data.photo.location);
          setLatitude(response.data.photo.location.latitude);
          setLongitude(response.data.photo.location.longitude);
          // console.log(
          //   "response.data.photos",
          //   response.data.photos.geo.photosForLocation
          // );
          //setLoading(false);
        })
        .catch((error) => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });

      return "ok";
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
