describe("Spies", function() {

  beforeEach(function(){
    Object.staticMethod = function(arg){
    };

    Object.prototype.instanceMethod = function(arg){
    };
    
    Object.prototype.methodWithCallback = function(callback){
      callback();
    };
  });

  describe("static methods", function(){
    it("should spy on static methods with arguments", function(){
      spyOn(Object, "staticMethod");
      Object.staticMethod("foo");

      expect(Object.staticMethod).toHaveBeenCalledWith("foo");
    });

    it("should spy on static methods without arguments", function(){
      spyOn(Object, "staticMethod");
      Object.staticMethod();

      expect(Object.staticMethod).toHaveBeenCalled();
    });
  });

  describe("instance methods", function(){
    it("should spy on instance methods with arguments", function(){
      var o = new Object();
      spyOn(o, "instanceMethod");
      o.instanceMethod("foo");

      expect(o.instanceMethod).toHaveBeenCalledWith("foo");
    });

    it("should spy on instance methods without arguments", function(){
      var o = new Object();
      spyOn(o, "instanceMethod");
      o.instanceMethod();

      expect(o.instanceMethod).toHaveBeenCalled();
    });
  });

  it("should spy on callback", function(){
    var callback = jasmine.createSpy();
    var o = new Object();
    o.methodWithCallback(callback);
    
    expect(callback).toHaveBeenCalled();
  });
});
