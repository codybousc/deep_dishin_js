function PizzaPie(pizza) {
  this.basePrice = 10;
  this.pizza = pizza;
}

PizzaPie.prototype.Large = function() {
  this.basePrice = this.basePrice + 5;
}

PizzaPie.prototype.Small = function() {
  this.basePrice = this.basePrice - 2;
}

$(document).ready(function(){
  $("form#new_pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizza_size = $("#pizza_size").val();
    var inputtedToppings = $("#toppings").val();

    var newPizza = new PizzaPie(inputtedPizza_size);

    if (inputtedPizza_size === "Large") {
       newPizza.Large();
     }
     else if (inputtedPizza_size === "Small") {
       newPizza.Small();
    } else {
      newPizza.basePrice;
    }




    $("ul#order").append("<li><span class='pizza'>" + newPizza.pizza + " " + inputtedToppings + " " + "$" + newPizza.basePrice + ".00"  )

    $("input#pizza_size").val("");
    $("input#toppings").val("");
  });
});
