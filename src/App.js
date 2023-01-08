import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😄": "Smiling",
  "😊": "Blush",
  "😇": " Innocent",
  "😐️": "Neutral face",
  "🤗": "Hugging",
  "😴": "Sleepy"
};

var emojiWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This emoji is Not in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>

      <h3>emoji we know</h3>
      {emojiWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.8rem", padding: "0.8rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
