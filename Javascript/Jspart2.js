window.location = "fullWebPage.html";
function someFunc(a, b) {
    window.print();
  alert("hit");
  product = multiply(a, b);
  resp = prompt("Are you sure?" + "  " + product);
  document.write(resp);
  
  // confirm(product);
  console.log("hello" + resp);
  
  function multiply(a, b) {
    return a * b;
  }
  result = add(a, b);
  document.write(result);
  date = new Date();
  document.write(date);

      var car = new Object();
      car.name = "jaguar";
      car.color = "black";

      document.write(car.name + "<br />");
      document.write(car.color);

      console.log(car);
}

function add(a, b) {
  return a + b;
}
