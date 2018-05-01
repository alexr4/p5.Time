//this snippet is a little time extension for p5js creating a time varibale which can be paused
p5.prototype.deltaTime = 0;
p5.prototype.lastTime = 0;
p5.prototype.time = 0;
p5.prototype.state = false;

p5.prototype.initTime = function(){
  this.deltaTime = 0;
  this.lastTime = 0;
  this.time = 0;
  this.state = false;
}

p5.prototype.updateTime = function(){
  let actualTime = this.millis();
  if(!this.state){
    this.deltaTime = actualTime - this.lastTime;

  }
  this.lastTime = actualTime;
  if(!this.state){
    this.time += this.deltaTime;
  }
}

p5.prototype.timePause = function(){
  this.state = true;
}

p5.prototype.timePlay = function(){
  this.state = false;
}

p5.prototype.getPause = function(){
  return this.state;
}

p5.prototype.getTime = function(){
  return this.time;
}

p5.prototype.getDeltaTime = function(){
  return this.deltaTime;
}

p5.prototype.getLastTime = function(){
  return this.lastTime;
}


p5.prototype.registerMethod('init', p5.prototype.initTime);
p5.prototype.registerMethod('pre', p5.prototype.updateTime);
