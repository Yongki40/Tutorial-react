import React from 'react';

function Jokes(props) {
  return (
    <div className="answer">
        {/* jika tidak ada properti ques maka tidak di tampilkan */}
        <p style={{ display: props.ques ? "block" : "none" }}>question: {props.ques}</p>
        <p style={{ color: props.ques ? "red" : "blue" }}>answer: {props.answer}</p> <br/>
    </div>
  );
}

export default Jokes;
