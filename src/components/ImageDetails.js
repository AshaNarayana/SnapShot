import React from "react";

const ImageDetails = ({ longitude, latitude, title, owner }) => {
  return (
    <div>
      <table className="table-custom" style={{ float: "right" }}>
        <tbody>
          <tr>
            <td className="table-custom-row">Image Title</td>
            <td>{title}</td>
          </tr>
          <tr>
            <td className="table-custom-row">Owner</td>

            <td>{owner}</td>
          </tr>
          <tr>
            <td className="table-custom-row">Longitude</td>
            <td>{longitude}</td>
          </tr>
          <tr>
            <td className="table-custom-row">Latitude</td>
            <td>{latitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImageDetails;
