var GreenDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="green"></span>');
  this.setPosition(top, left);
};

GreenDancer.prototype = Object.create(Dancer.prototype);

GreenDancer.prototype.constructor = GreenDancer;

GreenDancer.prototype.oldStep = Dancer.prototype.step;

GreenDancer.prototype.step = function() {

  this.oldStep();
  this.$node.toggle();

};
