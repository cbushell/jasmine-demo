describe("BeforeAndAfter", function() {
  var o = new Object();

  beforeEach(function(){
    o.colour = "blue";
  });

  afterEach(function(){
    // Runs after each spec
  });

  it("should be blue", function(){
    expect(o).toBeColoured("blue");
  });

  describe("Scoped before setup", function(){
    beforeEach(function(){
      o.colour = "green";
    });

    it("should be green", function(){
      expect(o).toBeColoured("green");
    });
  });
});
