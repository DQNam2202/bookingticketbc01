import { useState } from "react";
import React from "react";

export default function BaiTapChonXe() {
  const [state, setState] = useState("./img/car/imgRedCar.jpg");

// const [state, setState] = useState({
//   img: "./img/car/imgRedCar.jpg",
// });

  const changeColor = (color) => {
    setState(`./img/car/img${color}Car.jpg`);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img className="w-100" src={state} />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  changeColor("Red");
                }}
              >
                Red Car
              </button>
            </div>
            <div className="col-4">
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  changeColor("Silver");
                }}
              >
                Silver Car
              </button>
            </div>
            <div className="col-4">
              <button
                className="btn btn-dark"
                onClick={(e) => {
                  changeColor("Black");
                }}
              >
                Black Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
