
import audioFile from '../asset/game.wav';
export function Square(props){

   

    return(
        
        <div onClick={props.onClick}  className="square">


            <h5 >{props.value}</h5>
          
        </div>
        
    )
}