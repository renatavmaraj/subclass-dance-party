var GrinchDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="grinch naughty"></span>');
  this.setPosition(top, left);
};

GrinchDancer.prototype = Object.create(Dancer.prototype);

GrinchDancer.prototype.constructor = GrinchDancer;

GrinchDancer.prototype.oldStep = Dancer.prototype.step;

GrinchDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({left: '-=50px'}, 250);
  this.$node.animate({left: '+=50px'}, 250);
};