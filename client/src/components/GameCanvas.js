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

  if (gameScore > userState.highScore) {
    setUserState({ ...userState, highScore: gameScore })
  };

  // ============================================================
  // MATTER.JS  (useEffect)

  const boxRef = useRef(null)

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
        width: 1440,
        height: 800,
        background: false,
        wireframes: false,
      },
    });

    Render.run(render);
    Engine.run(engine);

    // CREATE WALLS
    World.add(engine.world, [

      // top bar
      Bodies.rectangle(600, 0, 1800, 50, {
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
      Bodies.rectangle(600, 600, 1800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'white',
          strokeStyle: 'white',
          lineWidth: 0
        },
        label: "locked"
      }),

      // separation bar
      Bodies.rectangle(600, 430, 1800, 30, {
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
      Bodies.rectangle(1440, 400, 50, 800, {
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
            visible: false,

          }
        },
      });

    World.add(engine.world, mouseConstraint);

    //  TRASH CANS

    const bin_normal = Bodies.rectangle(220, 550, 80, 100,
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
        label: "normal",
        collisionFilter: {
          category: 1
        }
      }
    )

    const bin_food = Bodies.rectangle(420, 550, 80, 100,
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

    const bin_paper = Bodies.rectangle(620, 550, 80, 100,
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
        collisionFilter: {
          category: 3
        }
      }
    )

    const bin_glass = Bodies.rectangle(820, 550, 80, 100,
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
        collisionFilter: {
          category: 4
        }

      }
    )

    const bin_plastic = Bodies.rectangle(1020, 550, 80, 100,
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
        collisionFilter: {
          category: 5
        }
      }
    )

    const bin_metal = Bodies.rectangle(1220, 550, 80, 100,
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

    // DRAG EVENT (enddrag) - get user moved object info
    Events.on(mouseConstraint, "enddrag", function (event) {

      const trashLabel = event.body.label
      const binLabel = bin_normal.label
      const colNum = event.body.collisionFilter.category

      // NORMAL SENSOR
      const trashX = event.mouse.absolute.x
      const trashY = event.mouse.absolute.y

      const bin_normalMaxX = bin_normal.bounds.max.x + 50
      const bin_normalMinX = bin_normal.bounds.min.x - 50
      const bin_normalMaxY = bin_normal.bounds.max.y + 50
      const bin_normalMinY = bin_normal.bounds.min.y - 50

      if ((trashY > bin_normalMinY && trashY < bin_normalMaxY && trashX > bin_normalMinX && trashX < bin_normalMaxX)) {

        console.log("normal")

        if (colNum === 8) {
          if (trashLabel === "normal") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

      // FOOD BIN SENSOR
      const bin_foodMaxX = bin_food.bounds.max.x + 50
      const bin_foodMinX = bin_food.bounds.min.x - 50
      const bin_foodMaxY = bin_food.bounds.max.y + 50
      const bin_foodMinY = bin_food.bounds.min.y - 50

      if ((trashY > bin_foodMinY && trashY < bin_foodMaxY && trashX > bin_foodMinX && trashX < bin_foodMaxX)) {

        console.log("food")

        if (colNum === 8) {
          if (trashLabel === "food") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

      // GLASS BIN SENSOR
      const bin_glassMaxX = bin_glass.bounds.max.x + 50
      const bin_glassMinX = bin_glass.bounds.min.x - 50
      const bin_glassMaxY = bin_glass.bounds.max.y + 50
      const bin_glassMinY = bin_glass.bounds.min.y - 50

      if ((trashY > bin_glassMinY && trashY < bin_glassMaxY && trashX > bin_glassMinX && trashX < bin_glassMaxX)) {

        console.log("glass")

        if (colNum === 8) {
          if (trashLabel === "glass") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

      // PAPER BIN SENSOR
      const bin_paperMaxX = bin_paper.bounds.max.x + 50
      const bin_paperMinX = bin_paper.bounds.min.x - 50
      const bin_paperMaxY = bin_paper.bounds.max.y + 50
      const bin_paperMinY = bin_paper.bounds.min.y - 50

      if ((trashY > bin_paperMinY && trashY < bin_paperMaxY && trashX > bin_paperMinX && trashX < bin_paperMaxX)) {

        console.log("paper")

        if (colNum === 8) {
          if (trashLabel === "paper") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

      // METAL BIN SENSOR
      const bin_metalMaxX = bin_metal.bounds.max.x + 50
      const bin_metalMinX = bin_metal.bounds.min.x - 50
      const bin_metalMaxY = bin_metal.bounds.max.y + 50
      const bin_metalMinY = bin_metal.bounds.min.y - 50

      if ((trashY > bin_metalMinY && trashY < bin_metalMaxY && trashX > bin_metalMinX && trashX < bin_metalMaxX)) {

        console.log("metal")

        if (colNum === 8) {
          if (trashLabel === "metal") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

      // PLASTIC BIN SENSOR
      const bin_plasticMaxX = bin_plastic.bounds.max.x + 50
      const bin_plasticMinX = bin_plastic.bounds.min.x - 50
      const bin_plasticMaxY = bin_plastic.bounds.max.y + 50
      const bin_plasticMinY = bin_plastic.bounds.min.y - 50

      if ((trashY > bin_plasticMinY && trashY < bin_plasticMaxY && trashX > bin_plasticMinX && trashX < bin_plasticMaxX)) {

        console.log("platic")

        if (colNum === 8) {
          if (trashLabel === "platic") {

            setMessage("yay! score!")

            setGameScore(gameScore => (gameScore + 10));

            Composite.remove(engine.world, event.body)
          }
          else {
            setMessage("Ouch!I don't belong Here")
            Composite.remove(engine.world, event.body)
          }
        }
      };

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
          {gameScore} {Message}
        </h1>
      </div>

      <div ref={boxRef}> </div>

    </>
  )
}

export default GameCanvas
