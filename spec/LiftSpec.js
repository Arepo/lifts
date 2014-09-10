// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

var lift;
var floorPanel2;

beforeEach(function() {
  lift = new Lift();
});

describe("Lift", function() {

  describe("going up and down", function() {

    it("starts on the ground floor", function() {
      expect(lift.floor).toEqual(0);
    });

    it("can go up to floor 4", function() {
      expect(lift.topFloor).toEqual(4);

    });

    it("it's bottom floor is the basement", function() {
      expect(lift.bottomFloor).toEqual(-1);
    });

    it("can go up", function() {
      lift.goUp();
      expect(lift.floor).toEqual(1);
    });

    it("can't go above floor 4", function() {
      lift.floor = 4;
      lift.goUp();
      expect(lift.floor).toEqual(4);
    });

    it("can go down", function() {
      lift.goDown();
      expect(lift.floor).toEqual(-1);
    });

    it("can't go below the basement", function() {
      lift.floor = -1;
      lift.goDown();
      expect(lift.floor).toEqual(-1);
    });

    it("can go to a specified floor froom any current floor", function() {
      lift.goTo(4);
      expect(lift.floor).toEqual(4);
      lift.goTo(-1);
      expect(lift.floor).toEqual(-1);
    });

    it("passes through floor 1 on the way from 0-2", function() {
      lift.goTo(2)
      expect(lift.reachFloor(1)).toBeTruthy();  
    })

    it("doesn't passes through floor 3 on the way from 0-2", function() {
      lift.goTo(2)
      expect(lift.reachFloor(3)).toBeFalsy();  
    })

  });

  describe("opening and closing doors", function() {

    it("starts with closed doors", function() {
      expect(lift.hasClosedDoors).toBeTruthy();
    });

    it("can open its doors", function() {
      lift.openDoors();
      expect(lift.hasClosedDoors).toBeFalsy();
    })

    it("can close them again", function() {
      lift.openDoors();
      lift.closeDoors();
      expect(lift.hasClosedDoors).toBeTruthy();
    })

  });

});

