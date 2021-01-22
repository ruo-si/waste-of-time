/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Matter, { Events } from "matter-js";


import trashObjArr from "../utils/trashObjArr"
// import binObjArr from "../utils/binArr"


const GameCanvas = () => {

  // ============================================================
  // JS GAME LOGIC

  // score state
  // const [gameStart, setGameStart] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  // const [timer, setTimer] = useState(5);



  // game database POST payload
  const [userState, setUserState] = useState({
    loggedIn: false,
    playId: 0,
    playerLevel: 1,
    highScore: 0,
    gameScore: 0,
  });


  const [Message, setMessage] = useState("");
  const [gameScore, setGameScore] = useState(0)

  if (gameScore > userState.highScore){
    setUserState({...userState, highScore: gameScore})
  }

  // function handleGameOver(){
  //   setGameState({...gameState, gameOver: true, gameStart: false})
  // }

  // let counter = 0
  // let timeleft = 60

  // function timeIt() {
  //   counter++;
  //   timeleft - counter
  // }
  // setInterval(timeIt, 1000)



  // ============================================================
  // MATTER.JS  (useEffect)

  const boxRef = useRef(null)
  const binRef_normal = useRef(null)


  useEffect(() => {

    // module aliases
    let Engine = Matter.Engine
    let Render = Matter.Render
    let Runner = Matter.Runner
    let World = Matter.World
    let Bodies = Matter.Bodies
    let Mouse = Matter.Mouse
    let MouseConstraint = Matter.MouseConstraint
    let Composite = Matter.Composite

    let engine = Engine.create(
      {
        positionIterations: 6
      }
    ),
      world = engine.world;

    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      options: {
        width: 1200,
        height: 800,
        background: false,
        wireframes: false,
      }
    });

    Render.run(render);
    Engine.run(engine);

    // create runner
    // var runner = Runner.create();
    // Runner.run(runner, engine);


    // CREATE WALLS
    World.add(engine.world, [

      // top bar
      Bodies.rectangle(600, 0, 1200, 50, {
        isStatic: true,
        background: false,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // floor bar
      Bodies.rectangle(600, 800, 1200, 50, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // separation bar
      Bodies.rectangle(600, 600, 1200, 30, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // right wall
      Bodies.rectangle(0, 300, 50, 1000, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // left wall
      Bodies.rectangle(1200, 400, 50, 800, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

    ]);

    // INITIAL TRASH
    World.add(engine.world, [trashObjArr[1], trashObjArr[3], trashObjArr[2], trashObjArr[0], trashObjArr[2]]);

    // MOUSE CONTROL
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        },
      });

    World.add(engine.world, mouseConstraint);


    //  TRASH CANS

    const bin_normal = Bodies.rectangle(100, 700, 80, 100,
      {
        isStatic: true,
        isSensor: true,
        render: {
          sprite: {
            texture: './bin_green.png',
            xScale: (0.5),
            yScale: (0.5)
          }
        },
        label: {
          1: "locked",
          2: "normal"
        },
        collisionFilter: {
          category: 1
        }
      }
    )

    const bin_food = Bodies.rectangle(300, 700, 80, 100,
      {
        isStatic: true,
        render: {
          sprite: {
            texture: './bin_red.png',
            xScale: (0.5),
            yScale: (0.5)
          }
        },
        label: "food",
        collisionFilter: {
          category: 2
        }
      }
    )

    const bin_paper = Bodies.rectangle(500, 700, 80, 100,
      {
        isStatic: true,
        render: {
          sprite: {
            texture: './bin_blue.png',
            xScale: (0.5),
            yScale: (0.5)
          }
        },
        label: "paper",
        // type: "locked,"
        collisionFilter: {
          category: 3
        }
      }
    )

    const bin_glass = Bodies.rectangle(700, 700, 80, 100,
      {
        isStatic: true,
        render: {
          sprite: {
            texture: './bin_gray.png',
            xScale: (0.5),
            yScale: (0.5)
          }
        },
        label: "glass",
        // type: "locked,"
        collisionFilter: {
          category: 4
        }

      }
    )

    const bin_plastic = Bodies.rectangle(900, 700, 80, 100,
      {
        isStatic: true,
        render: {
          sprite: {
            texture: './bin_yellow.png',
            xScale: (0.5),
            yScale: (0.5)
          }
        },
        label: "plastic",
        // type: "locked,"
        collisionFilter: {
          category: 5
        }
      }
    )

    const bin_metal = Bodies.rectangle(1100, 700, 80, 100,
      {
        isStatic: true,
        render: {
          sprite: {
            texture: './bin_geen2.png',
            xScale: (0.5),
            yScale: (0.5)
          },
        },
        label: "metal",
        // type:"locked,"
        collisionFilter: {
          category: 6
        }
      }
    )


    World.add(engine.world, [bin_normal, bin_food, bin_paper, bin_glass, bin_plastic, bin_metal])


    // MOUSE EVENT (mousedown)
    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      World.add(engine.world, [
        Bodies.circle(400, 50, 30, {
          render: {
            sprite: {
              texture: './banana_1.svg',
              xScale: (0.3),
              yScale: (0.3)
            },
          },
          collisionFilter: {
            category: 8
          },
          label: "food"
        }),
        Bodies.circle(800, 50, 30, {
          render: {
            sprite: {
              texture: './metal_can_1.svg',
              xScale: (0.3),
              yScale: (0.3)
            },
          },
          collisionFilter: {
            category: 8
          },
          label: "metal"
        }),
        Bodies.circle(510, 10, 50, {
          restitution: 0.5,
          label: "normal",
          render: {
            sprite: {
              texture: './fish_bone.svg',
              xScale: (0.3),
              yScale: (0.3)
            }
          },
          collisionFilter: {
            category: 8
          }
        })
      ])
    })

    // Render.lookAt(render, {
    //   min: { x: 0, y: 0 },
    //   max: { x: 100, y: 1600 }
    // });

    mouseConstraint.collisionFilter.group = 8

    // DRAG EVENT (enddrag) - get user moved object info
    Events.on(mouseConstraint, "enddrag", function (event) {


      const trashLabel = event.body.label
      const binLabel = bin_normal.label
      const lockEl = event.body.label[1]

      const colNum = event.body.collisionFilter.category

      console.log(colNum)
      // console.log(event.body.label[1])
      // console.log(event.body.label[2])

      console.log(event)

      if (colNum === 8) {

        Composite.remove(engine.world, event.body)
        setMessage("yay! score!")
        setGameScore( gameScore => (gameScore +10));
      }
      else {

        setMessage("Ouch!I don't belong Here")

      }


      // if (lockEl !== "locked" && trashLabel === binLabel) {

      //     console.log("hi");


      //     console.log(playState.gameScore);

      //     Composite.remove(engine.world, event.body)


      // }




      //  else {

      //   const factArray = [
      //     "food shoubee be thrown in the blue bin",
      //     "metal shoubee be thrown in the blue bin",
      //     "throw me in the green bin",
      //     "throw me in the yellow bin",
      //     "throw me in the white bin",
      //     "throw me in the gray bin",
      //   ]

      //   console.log(trashLabel === factArray.property)


      // switch  (trashLabel is "")

      // case "food" :

      // setFactState("throw me in the green bin!");

      // case "metal" :

      // setFactState()
      // }

      // if (!event.body.label[0] === "locked") {
      //   // REMOVING ON CLICK-UP
      // }








      // const bin_normalMaxX = bin_normal.bounds.max.x
      // const bin_normalMinX = bin_normal.bounds.min.x
      // const bin_normalMaxY = bin_normal.bounds.max.y
      // const bin_normalMinY = bin_normal.bounds.min.y

      // const trashX = event.mouse.absolute.x
      // const trashY = event.mouse.absolute.y

      // if ((trashY > bin_normalMinY && trashY > bin_normalMaxY && trashX > bin_normalMaxX)) {

      //   if (trashLabel === binLabel)

      //     console.log("touched bin normal!")
      // setPlayState( {...playState, gameScore : playState.gameScore + 1} )
      // }

      // console.log(trashLabel)
      // console.log(binLabel)

      // console.log(trashX)
      // console.log(bin_normalMaxX)
      // console.log(bin_normalMinX)

      // console.log(trashY)
      // console.log(bin_normalMaxY)
      // console.log(bin_normalMinX)

    });


    // keep the mouse in sync with rendering
    render.mouse = mouse;


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ============================================================
  // JSX RETURN
  return (

    <>
      <div>
        <h1>
          {gameScore}
        </h1>

        <h2>
          {Message}
        </h2>

        <h2>
          your high score :{userState.highScore}
        </h2>
      </div>

      <div ref={boxRef}> </div>

    </>
  )
}

export default GameCanvas
