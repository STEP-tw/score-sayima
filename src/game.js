let Game = function(){
  this.score=0;
};

Game.prototype={
  incrementScore : function(){
    this.score+=10;
  },
  getScore : function(){
    return this.score;
  }

};
