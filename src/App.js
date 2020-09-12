import React from 'react';
import Jokes from './components/Jokes';
import './App.css';

function App() {
  return (
    <React.Fragment>
          <Jokes
            answer="Cuman punchline"
        ></Jokes>

        <Jokes
            ques="pertanyaan 1 ?"
            answer="jawaban 1. Hahahahaha"
        ></Jokes>
        <Jokes
            ques="pertanyaan 2 ?"
            answer="jawaban 2. Hahahahaha"
        ></Jokes>
        <Jokes
            ques="pertanyaan 3 ?"
            answer="jawaban 3. Hahahahaha"
        ></Jokes>
        <Jokes
            ques="pertanyaan 4 ?"
            answer="jawaban 4. Hahahahaha"
        ></Jokes>
        <Jokes
            ques="pertanyaan 5 ?"
            answer="jawaban 5. Hahahahaha"
        ></Jokes>
    </React.Fragment>
  );
}

export default App;
