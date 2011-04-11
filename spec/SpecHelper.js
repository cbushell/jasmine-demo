beforeEach(function() {
  this.addMatchers({
    toBeColoured: function(expectedColour) {
      return this.actual.colour === expectedColour;
    }
  })
});
