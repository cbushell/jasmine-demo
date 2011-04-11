describe("Matchers", function() {

  describe("primitive matching", function(){
    it("should pass if two primitives are equal", function(){
      expect(true).toBe(true); 
    });

    it("should fail if two primitives are not equal", function(){
      expect(true).toBe(false);
    });
  });

  describe("object matching", function(){
    it("should pass if two objects are equal", function(){
      var o = new Object();
      expect(o).toBe(o); 
    });

    it("should fail if two objects are not equal", function(){
      var o1 = new Object();
      var o2 = new Object();
      expect(o1).toBe(o2);
    });
  });

  describe("regular expression matching", function(){
    it("should pass if regex matches", function(){
      expect("foobar").toMatch(/foo/);
    }); 

    it("should fail if regex does not match", function(){
      expect("foobar").toMatch(/baz/);
    });
  });

  describe("defined matching", function(){
    it("should pass if object is defined", function(){
      var o = new Object();
      expect(o).toBeDefined();
    });

    it("should fail if object is not defined", function(){
      expect(o).toBeDefined();
    });
  });

  describe("null matching", function(){
    it("should pass if object is null", function(){
      var o = null;
      expect(o).toBeNull();
    });

    it("should fail if object is not null", function(){
      var o = new Object();
      expect(o).toBeNull();
    });
  });

  describe("boolean matching", function(){
    it("should pass if true", function(){
      expect(true).toBeTruthy();
    });

    it("should fail if false", function(){
      expect(false).toBeTruthy();
    });
    
    it("should pass if false", function(){
      expect(false).toBeFalsy();
    });

    it("should fail if true", function(){
      expect(true).toBeFalsy();
    });
 
  });

  describe("array matching", function(){
    it("should pass if array contains value", function(){
      var a = [1, 2, 3, 4];
      expect(a).toContain(1);
    });

    it("should fail if array does not contain value", function(){
      var a = [1, 2, 3, 4];
      expect(a).toContain(5);
    });
  });

  describe("comparison matching", function(){
    it("should pass if one value is greater than another", function(){
      expect(10).toBeGreaterThan(0);
    });

    it("should fail if one value is less than the other", function(){
      expect(0).toBeGreaterThan(10);
    });

    it("should pass if one value is less than another", function(){
      expect(0).toBeLessThan(10);
    });

    it("should fail if one value is greater than the other", function(){
      expect(10).toBeLessThan(0);
    });
  });

  describe("exception matching", function(){
    it("should pass if an exception is thrown", function(){
      var f = new function() {
        throw "Hello";
//        throw new Error("An exception");
      };

      expect(function(){f();}).toThrow("Hello");
    });

    it("should fail if an exception is not thrown", function(){
      var f = new function() {
        return "All ok"; 
      };

      expect(f).toThrow("An exception");
    });
  });

  describe("custom matchers", function(){
    it("should pass if object is coloured as expected", function(){
      var o = Object();
      o.colour = "blue";
      expect(o).toBeColoured("blue");
    });

    it("should fail if object is coloured differently", function(){
      var o = new Object();
      o.colour = "green";
      expect(o).toBeColoured("blue");
    });
  });
});
