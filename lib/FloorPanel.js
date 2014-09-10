function FloorPanel(floor, lift) {
  this.floor = floor;
  this.lift = lift;
};

FloorPanel.prototype.upButton = function() {
  this.lift.floor = this.floor;
};

FloorPanel.prototype.downButton = function() {
  this.lift.floor = this.floor;
};