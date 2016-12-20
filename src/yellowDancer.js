var YellowDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="yellow"></span>');
  this.setPosition(top, left);
};

YellowDancer.prototype = Object.create(Dancer.prototype);

YellowDancer.prototype.constructor = YellowDancer;

YellowDancer.prototype.oldStep = Dancer.prototype.step;

YellowDancer.prototype.step = function() {

  this.oldStep();
  this.$node.toggle();

};
