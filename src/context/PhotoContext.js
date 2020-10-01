import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query) => {
    const storedImage = JSON.parse(localStorage.getItem(query)) || [];
    if (storedImage.length === 0) {
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=geo&has_geo=true&format=json&nojsoncallback=1`
        )
        .then((response) => {
          setImages(response.data.photos.photo);
          setLoading(false);
          localStorage.setItem(
            query,
            JSON.stringify(response.data.photos.photo)
          );
        })
        .catch((error) => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    } else {
      setImages(storedImage);
      setLoading(false);
    }
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
