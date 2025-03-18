const ramenMenu = document.getElementById("ramen-menu");
const ramenRating = document.querySelector(".ramen-rating");
const ramenComment = document.querySelector(".ramen-comment");
const ramenName = document.querySelector(".ramen-name");
const ramenRestaurant = document.querySelector(".ramen-restaurant");
const ramenImg = document.querySelector(".ramen-img");
const form = document.querySelector(".form");

const ramens = [
  {
    id: 1,
    name: "Shoyu ramen",
    restaurant: "Ichiran",
    image: "./images/gyukotsu.jpg",
    rating: 5,
    comment: "uuuum! now this is food for life",
  },
  {
    id: 2,
    name: "kojiro",
    restaurant: "Menya",
    image: "./images/kojiro.jpg",
    rating: 7,
    comment: "nice meal, a thumbs up to the chefs!",
  },
  {
    id: 3,
    name: "naruto",
    restaurant: "Dalkokuya",
    image: "./images/naruto.jpg",
    rating: 6,
    comment: "very tasty, can i have more?",
  },
  {
    id: 4,
    name: "nirvana",
    restaurant: "Shin-Sen-Gumi",
    image: "./images/nirvana.jpg",
    rating: 9,
    comment: "love the vegetables",
  },
    {
       id: 5,
       name: "shoyu",
       restaurant: "Ramen Nagi",
       image: "../../images/shoyu.jpg",
       rating: 3,
       comment: "very plain like soul plane",
     },
];

function displayRamens() {
  ramens.forEach((ramen) => {
    const imgElement = document.createElement("img");
    imgElement.src = ramen.image;
    imgElement.classList.add("img-menu");
    imgElement.onclick = () => handleClick(ramen.image);
    ramenMenu.appendChild(imgElement);
  });
}

function handleClick(imageSrc) {
  const imgMenu = document.querySelector(".img-menu"); // Class (Selected image)

  if (!imgMenu) {
    console.error(
      "imgMenu not found. Make sure your HTML has an element with class 'img-menu'."
    );
    return;
  }

  imgMenu.src = imageSrc; // Set selected image

  // Find the selected ramen
  const selectedRamen = ramens.find((ramen) => ramen.image === imageSrc);

  if (selectedRamen) {
    ramenName.textContent = selectedRamen.name;
    ramenRestaurant.textContent = selectedRamen.restaurant;
    ramenImg.style.backgroundImage = `url('${selectedRamen.image}')`;
    ramenRating.textContent = selectedRamen.rating;
    ramenComment.textContent = selectedRamen.comment;
  }
}

function addSubmitListener() {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get user input values
    const name = document.getElementById("name").value;
    const restaurant = document.getElementById("restaurant").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment").value;

    if (!name || !restaurant || !image || !rating || !comment) {
      alert("Please fill in all fields.");
      return;
    }

    // Create new ramen object
    const newRamen = {
      name,
      restaurant,
      image,
      rating: parseInt(rating),
      comment,
    };

    // Add new image to ramen menu
    const imgElement = document.createElement("img");
    imgElement.src = newRamen.image;
    imgElement.classList.add("img-menu");
    imgElement.onclick = () => handleClick(newRamen.image);
    ramenMenu.appendChild(imgElement);

    // Clear form inputs
    form.reset();
  });
}

function main() {
  addSubmitListener();
  displayRamens();

  if (ramens.length > 0) {
    handleClick(ramens[0].image);
  }
}

main();


