function ElevatorSystem(lift) {
	this.timeElapsed = 0
	// this.lift = lift
}

ElevatorSystem.prototype.lowerLift = function(lift) {
	lift.goDown
	this.incrementTime()
}

ElevatorSystem.prototype.raiseLift = function(lift) {
	lift.goUp
	this.incrementTime()
}

ElevatorSystem.prototype.incrementTime = function() {
	this.timeElapsed += 1
}

