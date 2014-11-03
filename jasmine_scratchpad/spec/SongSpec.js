describe("Song", function() {

  var song;

  beforeEach(function(){
    song = new Song("Title");
  });

  it("should have a name", function(){
    expect(song.getName()).toEqual("Title");
  })

})
