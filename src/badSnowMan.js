var BadSnowMan = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="badsnowman naughty"></span>');
  this.setPosition(top, left);
};

BadSnowMan.prototype = Object.create(Dancer.prototype);

BadSnowMan.prototype.constructor = BadSnowMan;

BadSnowMan.prototype.oldStep = Dancer.prototype.step;

BadSnowMan.prototype.step = function() {
  this.oldStep();
  this.$node.slideUp(250);
  this.$node.slideDown(250);
};
