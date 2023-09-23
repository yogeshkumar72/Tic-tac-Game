 import {Square} from './Square';
 import {useState} from 'react';
 import audioFile from '../asset/game.wav';
export function Board(){

const [state, setState] = useState(Array(9).fill(null));
const [isXTurn, setXTurn] = useState(true);
// const [count,setCount]=useState(0);
// const [get,set] = useState(['','','','','','','','','',]);
function reset(){
    setState(Array(9).fill(null));
}


function checkWinner(){
    // console.log(state);

    
    if (state.every((element) => element !== null)){
        // console.log("Draw");
    
  
        reset();
        return true;
    }
  

    const recepie = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let logic of recepie){
        const[a,b,c] = logic;
        if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
            return state[a];
        }        
    }
    return false;
};



const isWinner =checkWinner();


    


const handleClick = (index) => {
      
 
    
    
     
    
            if (state[index]!== null ){
                
               
                return;
            }
            let audioElement=document.getElementById('audio');
     
            audioElement.play();
            const copyState = [...state];
            copyState[index] = isXTurn ? "X" : "O";
            setState(copyState); 
            setXTurn(!isXTurn);
         

};

    



return(
        <div style={{display:"flex", flexDirection:"column", color:"white"}}>
       
      
        <div className="board-container">
                
                

            {isWinner? (<><span className='cong'> Congratulation <br/> Player {isWinner} </span><button onClick={reset} className="btn">Play Again</button></>):(
            
            
            <>
               <h4 className="msg_alert gradient">Player {isXTurn? "X" : "O"} Turn</h4>     
                <div class="board"> 
                <div className="board-row">
                <Square id="0"onClick={()=>handleClick(0)} value={state[0]}/>
                <Square id="1"onClick={()=>handleClick(1)} value={state[1]}/>
                <Square id="2"onClick={()=>handleClick(2)} value={state[2]}/>
                </div>

            <div className="board-row">
                <Square id="3" onClick={()=>handleClick(3)} value={state[3]}/>
                <Square id="4" onClick={()=>handleClick(4)} value={state[4]}/>
                <Square id="5" onClick={()=>handleClick(5)} value={state[5]}/>
                </div>

            <div className="board-row">
                <Square id="6" onClick={()=>handleClick(6)} value={state[6]}/>
                <Square id="7" onClick={()=>handleClick(7)} value={state[7]}/>
                <Square id="8" onClick={()=>handleClick(8)} value={state[8]}/>
                </div>
                </div>      <audio id="audio" src={audioFile}  type="audio/wav" />
                <button onClick={reset} className="btn reset">Reset</button>

               
               
            </>

            
           )}
        
        </div>
        </div>
)
}