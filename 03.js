// name: ucha 
// date: 15/05/2020
// lesson: ~03~


let myCar = {
    car: "BMW",
    model: "e46",
    color: "BLACK",
    date: 2004,
    horsepower: "ყველა",
    price: "5k $"
}

let loveBmw = []


loveBmw.push(myCar);

for(i = 0; i < loveBmw.length; i++) {
   console.log(`car is:` + ' ' + loveBmw[i].car);
   console.log(`model is:`  + ' ' + loveBmw[i].model);
   console.log(`color is:`  + ' ' + loveBmw[i].color);
   console.log(`date:`  + ' ' + loveBmw[i].date);
   console.log(`horsepower have:`  + ' ' + loveBmw[i].horsepower);
   console.log(`price:`  + ' ' + loveBmw[i].price);
}




