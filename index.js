const catalog = [ {
  id: 1,
  name: "01 - Item1",
  price: 200,
  available: false
}, 
{
  id: 2,
  name: "02 - Item2",
  price: 300,
  available: false
},  
{
  id: 3,
  name: "03 - Item3",
  price: 400,
  available: false
},
{
  id: 4,
  name: "04 - Item4",
  price: 300,
  available: false
},
{
  id: 5,
  name: "05 - Item5",
  price: 600,
  available: false
},
{
  id: 6,
  name: "06 - Item6",
  price: 800,
  available: false
},
{
  id: 7,
  name: "07 - Item7",
  price: 900,
  available: false
},
{
  id: 8,
  name: "08 - Item8",
  price: 500,
  available: false
},
{
  id: 9,
  name: "09 - Item9",
  price: 300,
  available: false
},
{
  id: 10,
  name: "10 - Item10",
  price: 300,
  available: false
}];

function createItem(cart) {
  const app = document.getElementById("app");
  const store = document.createElement("div");
  store.className = "store";

  const item = document.createElement("div");
  item.classList.add("item");
  const name = document.createElement("p");
  name.textContent = cart.name
  name.setAttribute("id", `name-${cart.id}`)
  const price = document.createElement("p");
  price.textContent = cart.price
  price.setAttribute("id", `price-${cart.id}`)
  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("id", `btn-${cart.id}`)
  toggleButton.textContent = "Available";
  const cartID = cart.id;

  toggleButton.onclick = function(e) {
    toggleButton.classList.toggle("notAvailable")
    function strike() {
      if (toggleButton.className === "notAvailable"){
        name.classList.toggle("notAvailable") && price.classList.toggle("notAvailable")
        console.log("worked");
      } else {
        name.classList.remove("notAvailable") || price.classList.remove("notAvailable")
        console.log("worked again");
      }
    }
    strike();
  }

  
  item.appendChild(name);
  item.appendChild(price);
  item.appendChild(toggleButton);
  store.appendChild(item);
  app.appendChild(store);
 
  return cart

  
}


const items = catalog.map(createItem);

function changeState() {
console.log("button worked")

}

