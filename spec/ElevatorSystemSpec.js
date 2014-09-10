describe("ElevatorSystem", function() {
  
  var system;

  beforeEach(function() {
    system = new ElevatorSystem(lift);
  })

  it("starts with 0 time elapsed", function() {
    expect(system.timeElapsed).toEqual(0);
  });

  it("takes 1 time for an elevator to move up one floor", function(){
    system.raiseLift(lift);
    expect(system.timeElapsed).toEqual(1);
  });

  it("takes 1 time for an elevator to move down one floor", function(){
    system.lowerLift(lift);
    expect(system.timeElapsed).toEqual(1);
  });

});

