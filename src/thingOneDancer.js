var thingOneDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="thingOne dancer square"></span>');
  this.setPosition();
  // this.changeColors();
}

thingOneDancer.prototype = Object.create(makeBlinkyDancer.prototype);
thingOneDancer.prototype.constructor = thingOneDancer;

// thingOneDancer.prototype.step = function(){
//   makeDancer.prototype.step.call(this);
//   this.$node.toggle();
// // change colors
// // change shapes
// // change size
// }

// thingOneDancer.prototype.changeColors = function() {
//   let red = Math.floor(Math.random() * (255 - 0) + 0);
//   let green = Math.floor(Math.random() * (255 - 0) + 0);
//   let blue = Math.floor(Math.random() * (255 - 0) + 0);
//   let styleSettings = {
//     "background-color": (red,green,blue)
//   }
//   this.$node.css(styleSettings)
// }