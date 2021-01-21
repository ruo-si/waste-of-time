
import React, { useEffect, useState } from "react";
import GameCanvas from "../components/GameCanvas"
import GameOver from "../components/GameOver"
import TrashMessage from "../components/TrashMessage"

function Game() {
       // score state
       const [gameStart, setGameStart] = useState(false);
       const [gameOver, setGameOver] = useState(false);
       const [timer, setTimer] = useState(5);
   
   //  <prop  setTimer ={ setTimer }/>
   
   
   
   
       function toggle() {
   
           setGameStart(!gameStart);
           console.log(gameStart);
   
           if (!gameStart) {
               // handleStartTime()
           }
   
       }
   
   
       //   timer countdown
       useEffect(() => {
           let counter = null;
           if (gameStart) {
               counter = setInterval(() => {
                   if (timer > 0) {
                       setTimer((timer) => timer - 1);
                   } else {
                       // handleGameOver()
                       console.log("gameover");
                       setGameStart(false);
                   }
               }, 1000);
           }
           return () => clearInterval(counter);
       }, [gameStart, timer]);
   
   
       return (
   
           <div>
               <div>{timer}</div>
   
               <button className={`button button-primary button-primary-${gameStart ? true : false}`} onClick={toggle} >
                   {gameStart ? "Exit" : "Start"}
               </button>
   
               <div>
                   {gameOver ? <GameOver setTimer ={setTimer} /> : <TrashMessage />}
               </div>
   
   
   
   
               <GameCanvas />
   
   
   
           </div>
       );

};



export default Game;