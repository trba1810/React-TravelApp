import React from "react";

function AddDestination() {
  return (
    <div className="p-4 border">
      <form>
        <div className="row col-8 offset-2">
          <h4>Unesi destinaciju:</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Unesi grad"
            ></input>
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Unesi drzavu"
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
