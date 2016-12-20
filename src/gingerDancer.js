var GingerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ginger naughty"></span>');
  this.setPosition(top, left);
};

GingerDancer.prototype = Object.create(Dancer.prototype);

GingerDancer.prototype.constructor = GingerDancer;

GingerDancer.prototype.oldStep = Dancer.prototype.step;

GingerDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({top: '-=50px'}, 250);
  this.$node.animate({top: '+=50px'}, 250);
};