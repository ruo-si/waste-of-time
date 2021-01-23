import Matter from "matter-js";

const Bodies = Matter.Bodies

const banana1 = Bodies.circle(210, 100, 50, {
    restitution: 0.5,
    label: "food",
    render: {
        sprite: {
            texture: './banana_1.svg',
            xScale: (0.3),
            yScale: (0.3)
        }
    },
    collisionFilter: {
        category : 2
    }
});

const banana2 = Bodies.circle(210, 100, 50, {
    restitution: 0.5,
    label: "metal",
    render: {
        sprite: {
            texture: './tire.svg',
            xScale: (0.3),
            yScale: (0.3)
        }
    },
    collisionFilter: {
        category : 2
    }
});


const lighter = Bodies.circle(600, 50, 50, {
    restitution: 0.6,
    label: "garbage",
    render: {
        sprite: {
            texture: './lighter.svg',
            xScale: (0.2),
            yScale: (0.2)
        }
    },
    collisionFilter: {
        category : 1
    }
});


const eggCarton = Bodies.circle(210, 100, 50, {
    restitution: 0.5,
    label: "paper",
    render: {
        sprite: {
            texture: './egg_carton.svg',
            xScale: (0.3),
            yScale: (0.3)
        }
    },
    collisionFilter: {
        category : 3
    }
});


const trashObjArr =[banana1, banana2, lighter, eggCarton]

export default trashObjArr