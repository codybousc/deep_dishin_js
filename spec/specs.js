describe("PizzaPie", function() {
  it("returns the base price of a pizza", function(){
    var testPizza = new PizzaPie(10);
    expect(testPizza.basePrice).to.equal(10);
  });

  it("returns the size of a Large pizza", function(){
    var testPizza = new PizzaPie("Large");
    expect(testPizza.pizza).to.equal("Large");
  });

  it("returns the size of a Small pizza", function(){
    var testPizza = new PizzaPie("Small");
    expect(testPizza.pizza).to.equal("Small");
  });

  it("returns the pizza with chosen toppings", function(){
    var testPizza = new PizzaPie("Meat Lover");
    expect(testPizza.pizza).to.equal("Meat Lover");
  });


});
