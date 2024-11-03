function add(x, y){
    return x + y;
  }
  function subtract(x, y){
    return x - y;
  }
  function multiply(x, y){
    return x * y;
  }
  function divide(x, y){
    return (x / y);
  }
  let x = 0;
  let y = 0;
  let op = "";
  let opmap = {
      "+": add,
      "-": subtract,
      "*": multiply,
      "/": divide
  };
  
  calc.addEventListener("click", () => {
    if (event.target.tagName === "BUTTON"){
        if (event.target.id < 10 && op === ""){
          x += event.target.id;
          display.textContent = parseFloat(x);
        }
        if (event.target.id < 10 && op != ""){
          y += event.target.id;
          display.textContent = parseFloat(y);
        }
      
    }
  });
  calc.addEventListener("click", () => {
    if (event.target.tagName === "BUTTON"){
      if (event.target.id == "plus"){
        if (y != 0 && x != 0){
          display.textContent = Math.round(opmap[op](parseFloat(x), parseFloat(y)) * 10000000000) / 10000000000;
          x = opmap[op](parseFloat(x), parseFloat(y));
          y = 0;
        }
        op = "+";
      }
      if (event.target.id == "minus"){
        if (y != 0 && x != 0){
          display.textContent = Math.round(opmap[op](parseFloat(x), parseFloat(y)) * 10000000000) / 10000000000;
          x = opmap[op](parseFloat(x), parseFloat(y));
          y = 0;
        }
        op = "-";
      }
      if (event.target.id == "times"){
        if (y != 0 && x != 0){
          display.textContent = Math.round(opmap[op](parseFloat(x), parseFloat(y)) * 10000000000) / 10000000000;
          x = opmap[op](parseFloat(x), parseFloat(y));
          y = 0;
        }
        op = "*";
      }
      if (event.target.id == "divide"){
        if (y != 0 && x != 0){
          display.textContent = Math.round(opmap[op](parseFloat(x), parseFloat(y)) * 10000000000) / 10000000000;
          x = opmap[op](parseFloat(x), parseFloat(y));
          y = 0;
        }
        op = "/";
      }
      if (event.target.id == "clear"){
        x = 0;
        y = 0;
        op = "";
        display.textContent = "";
      }
      if (event.target.id == "equal"){
        
        x = parseFloat(x);
        y = parseFloat(y);
        if (op == "+"){
          x = add(x, y);
        } else if (op == "-"){
          x = subtract(x, y);
        } else if (op == "/"){
          x = divide(x, y);
        } else if (op == "*"){
          x = multiply(x, y);
        }
        display.textContent = Math.round(x * 10000000000) / 10000000000;
        y = 0;
      }
    }
  });