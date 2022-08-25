import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper Case!", "success");
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lower Case!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Box Cleared!", "success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myTextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1
            style={{
              color: props.mode === "light" ? "#10102c" : "white",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myTextBox"
            rows="8"
            placeholder="Please Enter Your Text Here."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "#10102c" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLwClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3 my-2"
        style={{
          color: props.mode === "light" ? "#10102c" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Please enter text in above text box to preview."}
        </p>
      </div>
    </>
  );
}
