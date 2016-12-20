var SnowmanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="snowman nice"></span>');
  this.setPosition(top, left);
};

SnowmanDancer.prototype = Object.create(Dancer.prototype);

SnowmanDancer.prototype.constructor = SnowmanDancer;

SnowmanDancer.prototype.oldStep = Dancer.prototype.step;

SnowmanDancer.prototype.step = function() {
  this.oldStep();
  this.$node.slideUp(250);
  this.$node.slideDown(250);
};
