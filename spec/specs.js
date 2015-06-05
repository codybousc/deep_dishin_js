describe("PizzaPie", function() {
  it("returns the base price of a pizza", function(){
    var testPizza = new PizzaPie(10);
    expect(testPizza.basePrice).to.equal(10);
  });
  
  it("returns the price of Large pizza", function(){
    var testPizza = new PizzaPie(10);
    expect(testPizza.Small()).to.equal(15);
    debugger;
  });


});
