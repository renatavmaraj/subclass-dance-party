var GiftDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="gift nice"></span>');
  this.setPosition(top, left);
};

GiftDancer.prototype = Object.create(Dancer.prototype);

GiftDancer.prototype.constructor = GiftDancer;

GiftDancer.prototype.oldStep = Dancer.prototype.step;

GiftDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({left: '+=50'}, 250);
  this.$node.animate({left: '-=50'}, 250);
};
