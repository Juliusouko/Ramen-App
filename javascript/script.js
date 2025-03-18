const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Quiver-Grills", image: "shoyu.jpg", rating: 5, comment: "uum! this is the food for my life" },
  { id: 2, name: "Kojiro Ramen", restaurant: "Moringa Kitchen", image: "kojiro.jpg", rating: 4, comment: "Very flavorful aroma in the food!" },
  { id: 3, name: "Gyukotsu Ramen", restaurant: "Soko-safi village", image: "gyukotsu.jpg", rating: 7, comment: "yeah! now this is a meal" },
  { id: 4, name: "Nirvana Ramen", restaurant: "KFC", image:
  "nirvana.jpg", rating: 5, comment: "Delicious!" },
  { id: 5, name: "naruto", restaurant: "Hongkong", image: "naruto.jpg", rating: 4, comment: "nice food! i am proposing to the chef lady right away." },
];

let ramenDetail = document.getElementById("ramen-display");
ramenDetail.onclick = function() {
  alert("You clicked on the ramen image");
  let container = document.getElementById("image");
  container.innerHTML = document.querySelector();

  ramens.forEach((ramen) => {
    let ramenImage = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id;
    
    img.addevntListener("click", ramenDetail.onclick);
    container.appendChild(ramenImage);
  }
  );
};
//create a display ramen function ()
function displayRamen()  {
  ramenDetail.innerHTML = '';
  ramens.forEach((ramen) => (
    ramenDetail.innerHTML 
    += `<div class="display">
          <img src="./images/${ramen.image}" alt="${ramen.name}"
          style="display: block; margin-left: auto; margin-right: auto;">
        </div>`
  ));    
}
//create a function to add a new ramen
function addRamen() {
  let name = document.getElementById("name").value;
  let restaurant = document.getElementById("restaurant").value;
  let image = document.getElementById("image").value;
  let rating = document.getElementById("rating").value;
  let comment = document.getElementById("comment").value;

  ramens.push({ id: ramens.length + 1, name, restaurant, image, rating, comment });
  displayRamen();
}
addRamen(); 
