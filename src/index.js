import './style.css';
/*import  {ChessBoard} from './chessBoard.js'

//overall: knightMoves, prints shortest possible way to get from one squre to another by outputting all squares along the way

//build the board
let chessBoard = new ChessBoard(8);
console.log(chessBoard);

console.log(chessBoard.createAdjacentList());

//part 1: generate graph data structure to show possible knight moves from each square on 8x8 chess board

//given square, calculate shortest path
*/
class gameSquare {
    constructor (x,y,distance){
        this.x=x;
        this.y=y;
        this.distance=distance;
    }
}

function isInsideBoard(x,y){
    //assuming board is 8x8
    if(x >=0 && x<8 && y>=0 && y<8){
        return true;
    } else {
        return false;
    }
}


function knightMoves([origX,origY],[destX,destY]){
    //create visited array for 8x8 board
    let visited=[[false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false]];

    let dx= [-2,-1,1,2,-2,-1,1,2]
    let dy= [-1,-2,-2,-1,1,2,2,1]
    console.log(origX);
    console.log(origY);
    console.log(destX);
    console.log(destY);
//assuming board is 8 x 8
    let queue=[];//holds gamesquares
    visited[origX][origY]=true;
    console.log(visited);
    let origGameSquare=new gameSquare(origX,origY,0);
    queue.push(origGameSquare);
    console.log(queue[0]);
    while(queue.length!=0){
        for(let i=0; i<queue.length; i++){
            let currentSquare=queue.shift();
            //need to fix below this
            if(currentSquare.x===destX && currentSquare.y===destY){
                //console.log(queue);
                console.log(visited);
                console.log(currentSquare.distance);
                return;
            }
            for(let i=0; i<8; i++){
                let newX=currentSquare.x+dx[i];
                let newY=currentSquare.y+dy[i];
                if(isInsideBoard(newX,newY)&&!visited[newX][newY]){
                    visited[newX][newY]=true;
                    let newGameSquare=new gameSquare(newX,newY,currentSquare.distance+1);
                    //console.log(newGameSquare);
                    queue.push(newGameSquare);
                }
            }
        }
    }
//
}

knightMoves([0,1],[3,4]);


console.log("testing!");
