const catalog = [ {
  id: 1,
  name: "Item1",
  price: 200,
  available: false
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

  const id = document.createElement("p");
  id.textContent = cart.id;
  id.setAttribute("id", `id-${cart.id}`)

  const name = document.createElement("p");
  name.textContent = cart.name
  name.setAttribute("id", `name-${cart.id}`)

  const price = document.createElement("p");
  price.textContent = cart.price
  price.setAttribute("id", `price-${cart.id}`)

  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("id", `btn-${cart.id}`)
  toggleButton.textContent = "Available";
  

  toggleButton.onclick = function(e) {
    toggleButton.classList.toggle("notAvailable")
    function strike() {
      if (toggleButton.className === "notAvailable"){
        id.classList.toggle("notAvailable") && name.classList.toggle("notAvailable") && price.classList.toggle("notAvailable")
        // console.log("worked");
      } else {
        id.classList.toggle("notAvailable") || name.classList.remove("notAvailable") || price.classList.remove("notAvailable")
        // console.log("worked again");
      }
    }
    strike();
  }
  
  item.appendChild(id);
  item.appendChild(name);
  item.appendChild(price);
  item.appendChild(toggleButton);
  store.appendChild(item);
  app.appendChild(store);

  return cart

}

const items = catalog.map(createItem);


