let Game = function(numberOfRows,numberOfCols){
  this.snake;
  this.food;
  this.rows=numberOfRows;
  this.cols=numberOfCols;
  this.score=0;
};

Game.prototype={
  incrementScore : function(){
    this.score+=10;
  },
  getScore : function(){
    return this.score;
  },
  addSnake : function(snake){
    this.snake=snake;
  }

};
