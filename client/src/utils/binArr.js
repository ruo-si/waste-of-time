import Matter from "matter-js";

const Bodies = Matter.Bodies


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
        label: "normal",
        // type: "locked,"
        collisionFilter: {
            category : 1
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
        // type: "locked,"
        collisionFilter: {
            category : 2
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
            category : 3
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
            category : 4
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
            category : 5
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
            category : 6
        }
    }
)



const binObjArr = [bin_normal, bin_food, bin_paper, bin_glass, bin_plastic, bin_metal]

export default binObjArr;