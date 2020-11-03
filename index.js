const catalog = [ {
  id: 1,
  name: "Item1",
  price: 200,
  available: true
}, 
{
  id: 2,
  name: "Item2",
  price: 300,
  available: false
},  
{
  id: 3,
  name: "Item3",
  price: 400,
  available: false
},
{
  id: 4,
  name: "Item4",
  price: 300,
  available: false
},
{
  id: 5,
  name: "Item5",
  price: 600,
  available: false
},
{
  id: 6,
  name: "Item6",
  price: 800,
  available: false
},
{
  id: 7,
  name: "Item7",
  price: 900,
  available: false
},
{
  id: 8,
  name: "Item8",
  price: 500,
  available: false
},
{
  id: 9,
  name: "Item9",
  price: 300,
  available: false
},
{
  id: 10,
  name: "Item10",
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
  toggleButton.addEventListener("click", changeState());
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

