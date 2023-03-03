enum Direction{
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}


function turnDirection (direction:Direction){
    switch(direction){
        case Direction.LEFT:
            console.log('向左')
            break;
        case Direction.RIGHT:
            console.log('向右')
            break;
    }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)