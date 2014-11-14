describe("Seminar", function(){

  var seminar;

  beforeEach(function(){
    seminar = Seminar.create({name: "Jasmine", price: 100});
  });

  it("should have a name", function(){
    expect(seminar.getName()).toEqual("Jasmine");
  })

  it("should have a price", function(){
    expect(seminar.getPrice()).toEqual(100);
  })

})
