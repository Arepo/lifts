// function Lift() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };


function Lift() {
	this.floor = 0;
	this.topFloor = 4;
	this.bottomFloor = -1;
	this.hasClosedDoors = true;
	this.elapsedTime;
};

Lift.prototype.goUp = function() {
	if(this.floor < 4)
		this.floor += 1;
};

Lift.prototype.goDown = function() {
	if(this.floor > -1) 
		this.floor -= 1;
};

Lift.prototype.goTo = function(floor) {
	this.floor = floor;
};

Lift.prototype.openDoors = function() {
	this.hasClosedDoors = false
}

Lift.prototype.closeDoors = function() {
	this.hasClosedDoors = true
}

Lift.prototype.reachFloor = function(floor) {
	return true
}