describe("Seminar", function(){

  var seminar;

  beforeEach(function(){
    seminar = Seminar.create({name: "Jasmine"});
  });

  it("should have a name", function(){
    expect(seminar.getName()).toEqual("Jasmine");
  })


})
