/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GameCanvas from "../components/GameCanvas"
import GameOver from "../components/GameOver"
import "./pages.css"

function Game({ userState , setUserState}) {
    // console.log(gameScore)
    // console.log(highScore)
    // console.log({...userState})
    // setUserState({... userState: email: "oo"})
    // console.log(setUserState)

    // score state
    const [gameStart, setGameStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(20);
    const [gameScore, setGameScore] = useState(0);
    const [Message, setMessage] = useState("");

    // check if high score to save to database
    // function checkHighScore() {
    //     // save high score
    //     if (gameScore > highScore) {
    //         setUserState(userState.highScore: gameScore)
    //     };
    //     reutrn
    // };

    // start button toggle
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
                    setGameOver(true)
                    setTimer(20)
                }
            }, 1000);
        }
        return () => clearInterval(counter);
    }, [gameStart, timer]);


    return (

        <div className="gamewrap" >
           {gameStart && <div>{gameScore} Point</div>}
        {gameStart && <div>{timer} S</div>}
            {!gameOver || !gameStart && <div>{Message}</div>}

            <button className={`${gameStart ? true : false}`} onClick={toggle} >
                {gameStart ? "Exit" : "Start"}
            </button>

            <div >
                {gameOver && <GameOver gameScore={gameScore}/>}
            </div>

            {gameStart && <GameCanvas gameScore={gameScore} setGameScore={setGameScore} setMessage={setMessage} />}

        </div>
    );

};

export default Game;