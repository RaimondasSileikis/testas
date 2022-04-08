
import axios from "axios";
import { useEffect, useState } from "react";
import Joke from "./Joke";
import Joke1 from "./Joke1";


export default function Jokes() {

    

const [jokes, setJokes] = useState([]);

useEffect(() =>{
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
    .then(j => {
        console.log(j.data.jokes);
        setJokes(j.data.jokes);
    })
}, [])


    return(

        <ul style={{ display:'flex', flexDirection:'column',gap:'20px', alignContent:"center", justifyContent:"center",  width:'50vw', backgroundColor: "blanchedalmond"}} >
            {
                jokes.map(u => <div><Joke key={u.id} setup={u.setup} delivery={u.delivery}  ></Joke> <Joke1 key={u.id}  joke={u.joke}  ></Joke1></div> ) 
                
              

            }
        </ul>


    )
}