import React, { useEffect, useState } from "react";
import {numToHex} from "../utils/utils";

const Colors = ({ index, item }) => {
  // console.log(colorList);
  
  const { rgb, weight } = item;
  console.log(rgb,weight);

  let bcgColor = rgb.join(",");
  let hexColor = `#${numToHex(rgb[0]) + numToHex(rgb[1]) + numToHex(rgb[2])}`;

  const [copy, setCopy] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setCopy(false), 2000);
    return () => clearTimeout(timeout);
  }, [copy]);

  return (
    <div 
      className={` box  p-1 border border-1 border-dark col-6 col-sm-4 col-md-3 col-lg-2 fw-bold text-center fs-5 ${
        index > 10 && "text-light"
      }`}
      style={{ backgroundColor: `rgb(${bcgColor})` }}
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hexColor);
      }}
    >
      <p>{weight}%</p>
      <p>#{hexColor}</p>
      {copy && <p className='fs-4 text-secondary'>COPIED TO CLIPBOARD</p>}
    </div>
  );
};

export default Colors;
