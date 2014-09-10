describe("Floor panel", function() {

  beforeEach(function() {
    lift = new Lift();
    floorPanel2 = new FloorPanel(2, lift);
  });


  it("calls a lift when an upButton is pressed", function() {
    floorPanel2.upButton();
    expect(lift.floor).toEqual(2);
  });

  it("calls a lift when a downButton is pressed", function() {
    floorPanel2.downButton();
    expect(lift.floor).toEqual(2);
  });

  xit("opens the doors of a lift going up past it if upButton is pressed", function(){
    lift.goTo(4)
  })

});