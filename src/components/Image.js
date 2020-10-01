import React from "react";
import { NavLink } from "react-router-dom";

const Image = ({ url, title, photoId, longitude, latitude, owner }) => {
  return (
    <li>
      <NavLink
        to={{
          pathname: "/photoDetails",
          aboutProps: {
            latitude: latitude,
            longitude: longitude,
            title: title,
            owner: owner,
            url: url,
          },
        }}
      >
        <img src={url} alt={title} />
      </NavLink>
    </li>
  );
};

export default Image;
