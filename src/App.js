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
    setNewText(output);
    console.log(newText)
  });

  const handleChange = event => {
    event.preventDefault();
    setFormText(event.target.value);
    console.log(event.target.value);

  }



  return (
    <div className="App">
      <h2>EnTeR yOuR tExT hErE:</h2>
      <input
        type="text"
        name="input"
        onChange={event => handleChange(event)}
      />
     
    </div>
  );
}

export default App;
