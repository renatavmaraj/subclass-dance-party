var ElfDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="elf nice"></span>');
  this.setPosition(top, left);
};

ElfDancer.prototype = Object.create(Dancer.prototype);

ElfDancer.prototype.constructor = ElfDancer;

ElfDancer.prototype.oldStep = Dancer.prototype.step;

ElfDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({top: '-=50px'}, 250);
  this.$node.animate({top: '+=50px'}, 250);
};
