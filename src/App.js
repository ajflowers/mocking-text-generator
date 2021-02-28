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
  }, [formText, firstUpper]);

  const updateText = (str) => {
    setNewText(str);
  }

  const handleChange = event => {
    event.preventDefault();
    setFormText(event.target.value);
    // console.log(event.target.value);

  }

  const flipCase = () => {
    setFirstUpper(!firstUpper);
  }

  return (
    <div className="App">
      <h2>{firstUpper ? "EnTeR yOuR tExT hErE:" : "eNtEr YoUr TeXt HeRe:"}</h2>
      <input
        type="text"
        name="input"
        onChange={event => handleChange(event)}
      />
      <input readOnly
        type = "text"
        name = "output"
        value = {newText}
      />
      <button onClick={flipCase}>
        {firstUpper ?  "InVeRt CaSe" : "iNvErT cAsE"}
      </button>

     
    </div>
  );
}

export default App;
