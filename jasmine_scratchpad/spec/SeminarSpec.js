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

  it("should have a gross price with a VAT of 20%", function(){
    expect(seminar.getGrossPrice()).toEqual(120);
  })

  describe("Tax Free Seminar", function(){

    beforeEach(function(){
      seminar = Seminar.create({isTaxFree: true});
    });

    it("should have a gross price equal to base price", function(){
      expect(seminar.getPrice()).toEqual(seminar.getGrossPrice());
    })
  })

})
