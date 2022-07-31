import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Values from "values.js";
import Colors from "./components/Colors";

function App() {
  const [colorText, setColorText] = useState();
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#002288").all(10));
  console.log(colorList);
  // console.log(colorText);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(colorText).all(10);
      setColorList(colors);
      // console.log(colors);
    } catch (error) {
      setError(true);
      alert("Please enter a valid value");
      // console.log(error);
    }
  };
  // console.log(colorList);
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 '>
      <div>
        <form onSubmit={handleSubmit} action=''>
          <label htmlFor=''>Color Generator</label>
          <input
            type='text'
            id='color'
            name='color'
            placeholder='#002288'
            value={colorText}
            className={`${error ? "error" : null}`}
            onChange={(e) => {
              setColorText(e.target.value);
              setError(false);
            }}
          />
          <button type='submit'> Submit </button>
        </form>
        <main>
          {colorList.map((item, index ) => {
            return <Colors item={item} index={index} key={index} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
