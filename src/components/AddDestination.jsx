import React, { useState } from "react";
import { useAddDestinationMutation } from "../api/DestinationAPI";

function AddDestination() {
  const [newCity, setNewCity] = useState();
  const [newCountry, setNewCountry] = useState();
  const [addDestinationMutation] = useAddDestinationMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDestinationMutation({
      id: Math.random() * 100,
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });
    setNewCity("");
    setNewCountry("");
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Unesi destinaciju:</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Unesi grad"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            ></input>
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Unesi drzavu"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            ></input>
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Dodaj</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
