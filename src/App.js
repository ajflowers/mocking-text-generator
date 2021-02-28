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
      } else if ((char === "\\" && i > 0) && formText.charAt(i - 1) !== "\\") {
        caps = !caps
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
      <h2>{firstUpper ? "MoCkInG tExT gEnErAtOr:" : "mOcKiNg TeXt GeNeRaToR:"}</h2>
      <div className="instructions">
        <h3>Instructions:</h3>

        <ul>
          <li>Enter your text in the top box.</li>
          <li>The mememified text will automatically appear in the lower box.</li>
          <li>Use the "invert case" button to switch all uppercase and lowercase letters in the output.</li>
          <li>If the text is not to your liking in either configuration, you can edit the case of individual letters by placing a backslash ("\") in front of them.</li>
          <ul>
            <li>The backslash indicates that a given character should be the same case as the character before it.</li>
            <li>The backslash may not modify the first character of your text.</li>
            
          </ul>
        </ul>
      </div>
      <form className="text-memer">
        
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
