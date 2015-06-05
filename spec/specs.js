describe("PizzaPie", function() {
  it("returns the base price of a pizza", function(){
    var testPizza = new PizzaPie(10);
    expect(testPizza.basePrice).to.equal(10);
  });


});
