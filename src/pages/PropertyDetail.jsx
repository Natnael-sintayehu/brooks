import React from "react";
import { useParams } from "react-router-dom";

export default function PropertyDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Property Detail</h2>
      <p>Showing details for property ID: {id}</p>
    </div>
  );
}
