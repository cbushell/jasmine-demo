describe("SuitesAndSpecs", function() {

  it("should do something", function(){
    expect(true).toEqual(true);
  });

  xit("shouldn't matter that I'm a failing spec because I've been disabled", function(){
     expect(true).toEqual(false); 
  });

  describe("A nested suite", function(){
    it("should do something else", function(){
      expect(true).toEqual(true);
    });
  });

  xdescribe("A disabled suite", function(){
    it("shouldn't matter that I'm a failing spec, because the suite I'm in is disabled", function(){
      expect(true).toEqual(false);
    });
  });
});
