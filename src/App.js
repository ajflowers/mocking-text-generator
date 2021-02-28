import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formText, setFormText] = useState('');
  const [newText, setNewText] = useState('');
  const [firstUpper, setFirstUpper] = useState(false);

  useEffect(() => {
    var caps = firstUpper;
    var output = ""
    for(var i = 0; i < formText.length; i++) {
      var char = formText.charAt(i);
      if (char.match(/[a-z]/i)) {
        if (caps) {
          output += char.toUpperCase();
        } else {
          output += char.toLowerCase();
        }
        caps = !caps;
      } else {
        output += char;
      }      
    }
    updateText(output);
  });

  const updateText = (str) => {
    setNewText(str);
  }

  const handleChange = event => {
    event.preventDefault();
    setFormText(event.target.value);
    // console.log(event.target.value);

  }

  const flipCase = (event) => {
    event.preventDefault();
    setFirstUpper(!firstUpper);
  }

  return (
    <div className="App">
      <form className="text-memer">
        <h2>{firstUpper ? "MoCkInG tExT gEnErAtOr:" : "mOcKiNg TeXt GeNeRaToR:"}</h2>
        <label htmlFor="input">Your text:</label>
          
          <input
            type="text"
            name="input"
            onChange={event => handleChange(event)}
          />
        
        <br/>
        <br/>
        <label htmlFor="output">Me:</label>
          
          <input readOnly
            type = "text"
            name = "output"
            value = {newText}
          />
        
        <br/>
        <br/>
        <button onClick={event => flipCase(event)}>
          {firstUpper ?  "InVeRt CaSe" : "iNvErT cAsE"}
        </button>
      </form>

     
    </div>
  );
}

export default App;
