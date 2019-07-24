var weirdDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  this.$node = $('<span class="weirdDancer dancer infinity bounce"><iframe src="https://giphy.com/embed/l41YzMGWzz9d1XZba" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mountaindew-mtn-dew-l41YzMGWzz9d1XZba"></a></p></span>');
  this.setPosition();
}

weirdDancer.prototype = Object.create(makeDancer.prototype);
weirdDancer.prototype.constructor = weirdDancer;

