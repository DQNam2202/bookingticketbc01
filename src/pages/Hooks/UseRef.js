import React, { useState,useRef } from "react";

export default function UseRef(props) {
  let [number, setNumber] = useState(1);

  // Dữ liệu dành cho giá trị kéo theo sử dụng useRef
  let messRef = useRef('');

  console.log('messRef',messRef.current)
  return (
    <div>
      {number}
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          messRef.current = "Dữ Liệu Đã Được Thay Đổi";
        }}
      >
        +
      </button>
    </div>
  );
}
