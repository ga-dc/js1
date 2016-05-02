var jasmineExpect = require('jasmine-expect');
var Monkey = require("../lib/monkey.js");

describe("Monkey", function() {
  it("has a name", function() {
    adam = new Monkey("Adam", "Spider Monkey");

    expect(adam.name).toEqual("Adam");
  });

  it("has a species", function() {
    andy = new Monkey("Andy", "Cool Monkey");

    expect(andy.species).toEqual("Cool Monkey");
  });

  it("starts with no foods eaten", function() {
    adrian = new Monkey("Adrian", "White-headed Capuchin");

    expect(adrian.foodsEaten).toEqual([]);
  });

  it("can eat a food (a string)", function() {
    matt = new Monkey("Matt", "Mandrill");
    matt.eat("banana");
    matt.eat("PB&J");

    expect(matt.foodsEaten).toContain("banana");
    expect(matt.foodsEaten).toContain("PB&J");
  });

  it("can introduce itself with name, species, and foods eaten", function() {
    jesse = new Monkey("Jesse", "Dusky Leaf Monkey");
    jesse.eat("cheeseburger");
    jesse.eat("bacon");

    expect(jesse.introduce()).toContain("Jesse");
    expect(jesse.introduce()).toContain("Dusky Leaf Monkey");
    expect(jesse.introduce()).toContain("cheeseburger");
    expect(jesse.introduce()).toContain("bacon");
  });

  // //******BONUS******
  // it("always has a capitalized name", function() {
  //  robin = new Monkey("robin", "Olive Baboon");
  //  expect(robin.name).toEqual("Robin");
  // });
  //
  // it("won't eat foods begninng with a vowel", function() {
  //  robin = new Monkey("robin", "Olive Baboon");
  //
  //  robin.eat("apple");
  //  robin.eat("eclair");
  //  robin.eat("ice");
  //  robin.eat("ovaltine");
  //  robin.eat("udon");
  //
  //  robin.eat("pudding");
  //  robin.eat("chocolate");
  //
  //  //we only expect to see non-vowel foods in the list of foodsEaten
  //  expect(robin.foodsEaten).toEqual(["pudding", "chocolate"]);
  // });
});
