export default function Joke({setup, delivery }) {

    return(

        <li><i style={{color:'green'}} >{setup}</i>: <i style={{color:'blue'}} >{delivery}</i></li> 
    )
}