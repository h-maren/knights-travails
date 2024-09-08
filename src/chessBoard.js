class ChessBoard {
    constructor(num){
        //adjacentList is a map
        this.numSquares=num;
        this.boardResult=this.buildBoard(num);
    }
    buildBoard(num){
        let boardResult=[];
        for(let x=0; x<num; x++){
            for(let y=0; y<num; y++){
                boardResult.push([x,y]);
            }
        }
        return boardResult;
    }
    knightMoves((square1,square2);
        let square1
    //create adjacent list for each square in the board;
    /*createAdjacentList () {
        let numSquares=this.numSquares;
        let adjacentList=[];
        let square=this.boardResult[10];
        console.log(square);
        adjacentList .push(square);
        
        let origX=square[0];
        let origY=square[1];
        console.log(origX);
        console.log(origY);

        if((origX+2<numSquares)&&(origY+1<numSquares)){
            adjacentList.push([origX+2,origY+1]);
        }
        return adjacentList;
    }*/
    /*


        let adjacentList=this.boardResult[10];
        console.log(adjacentList);
        let numSquares=this.numSquares;
        //all possible X & Y moves of knight
        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

        let origX=adjacentList[0];
        let origY=adjacentList[1];


        for(let i=0; i<X.length; i++){
            for (let j=0; j<Y.length; j++){
                let newX=origX+X[i];
                let newY=origY+Y[j];
                if(newX>=0 && newY>=0 && newX<numSquares && newY<numSquares){
                    let newArr=[newX,newY];
                    adjacentList.push(newArr);
                }
            }
        }
            */
    


    /*
    addSquare(x,y) {
        this.adjacentList[[x,y]]=[];
        return [x,y];
    }

    //creates graph to square connections between squares
    knightpositions(x,y){
        let square=this.addSquare(x,y);
        if((x+2<8) && (y+1<8)){
            this.addEdge(square, [x+2,y+1]);
        }
        if ((x-2 >= 0) && (y+1 < 8)) {
            this.addEdge(square, [x-2,y+1]);
         }
         if ((x+2 < 8) && (y-1 >= 0)) {
            this.addEdge(square, [x+2,y-1]);
         }
         if ((x-2 >= 0) && (y-1 >= 0)) {
            this.addEdge(square, [x-2,y-1]);
         }
         if ((x+1 < 8) && (y+2 < 8)) {
            this.addEdge(square, [x+1,y+2]);
         }
         if ((x+1 < 8) && (y-2 >= 0)) {
            this.addEdge(square, [x+1,y-2]);
         }
         if ((x-1 >= 0) && (y+2 < 8)) {
            this.addEdge(square, [x-1,y+2]);
         }
         if ((x-1 >= 0) && (y-2 >= 0)) {
            this.addEdge(square, [x-1,y-2]);
         }
     }
     allKnightPositions(x, y) {
        if (!this.adjacentList[`${x},${y}`]) {
         this.knightPositions(x, y);
         this.adjacentList[`${x},${y}`].map(child => {
            {
            this.allKnightPositions(child[0], child[1]);
            }
            });
        }
    }*/

}

export { ChessBoard }