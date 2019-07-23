var weirdDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  this.$node = $('<span class="weirdDancer dancer infinity"></span>');
  this.setPosition();
}

weirdDancer.prototype = Object.create(makeBlinkyDancer.prototype);
weirdDancer.prototype.constructor = weirdDancer;

