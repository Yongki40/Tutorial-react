import React from 'react';
import Jokes from './components/Jokes';
import jokesData from './components/jokesData';
import './App.css';

function App() {
    //mapping
    // const nums =[1,2,3,4,5,6,7,8,9,10];
    // const double = nums.map(function(num){
    //     return num * 2
    // });
    // console.log(double);

    //array of components
    const jokesComponents = jokesData.map((joke)=>{
        return (
            <Jokes key={joke.id} ques={joke.ques} answer={joke.answer}/>
        );
    })
    
    return (
        //cara biasa
        // <React.Fragment>
        //     <Jokes
        //         answer="Cuman punchline"
        //     ></Jokes>

        //     <Jokes
        //         ques="pertanyaan 1 ?"
        //         answer="jawaban 1. Hahahahaha"
        //     ></Jokes>
        //     <Jokes
        //         ques="pertanyaan 2 ?"
        //         answer="jawaban 2. Hahahahaha"
        //     ></Jokes>
        //     <Jokes
        //         ques="pertanyaan 3 ?"
        //         answer="jawaban 3. Hahahahaha"
        //     ></Jokes>
        //     <Jokes
        //         ques="pertanyaan 4 ?"
        //         answer="jawaban 4. Hahahahaha"
        //     ></Jokes>
        //     <Jokes
        //         ques="pertanyaan 5 ?"
        //         answer="jawaban 5. Hahahahaha"
        //     ></Jokes>
        // </React.Fragment>

        //cara dengan array of components

        <React.Fragment>
            {jokesComponents}
        </React.Fragment>
    );
}

export default App;
