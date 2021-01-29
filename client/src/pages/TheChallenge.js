/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GameCanvas from "../components/GameCanvas"
import GameOver from "../components/GameOver"
import "./pages.css"

function Game({ setUserState, userState }) {

    // console.log(userState.gameScore)

    // score state
    const [gameStart, setGameStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(15);
    const [gameScore, setGameScore] = useState(0);
    const [Message, setMessage] = useState("");

    // useEffect(() => {

    //         console.log(gameScore)
    //         console.log(userState.highScore)
    //         if (gameScore > userState.highScore){
    //             setUserState({...userState, highScore: gameScore})
    //         }
    //         console.log(userState.highScore)


    // },)

    // start button toggle
    function toggle() {

        setGameStart(!gameStart);
        // console.log(gameStart);
    }

    //   timer countdown
    useEffect(() => {

        let counter = null;

        if (gameStart) {
            counter = setInterval(() => {

                if (timer > 0) {
                    setTimer((timer) => timer - 1);

                } else {

                    // setUserState({...userState, gameScore: gameScore})
                    console.log("gameover");
                    setGameStart(false);
                    setGameOver(true);
                    setTimer(15);
                }
            }, 1000);
        }
        return () => clearInterval(counter);

    }, [gameStart, timer]);


    return (

        <div className="gamewrap" >

            {gameStart && <div> {gameScore} Point</div>}
            {gameStart && <div>{timer} s</div>}
            <div style={{height:"50px", position:"relative"}}>
            {gameStart && <div style={{position:"absolute", left:"48%"}}>{Message}</div>}
            </div>

            <button className={`${gameStart ? true : false}`} onClick={toggle} >
                {gameStart ? "Exit" : "Start"}
            </button>

            <div >
                {gameOver && <GameOver gameScore={gameScore} userState={userState} />}
            </div>

            {gameStart && <GameCanvas userState={userState} setUserState={setUserState} gameScore={gameScore} setGameScore={setGameScore} setMessage={setMessage} />}

        </div>
    );

};

export default Game;