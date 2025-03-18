const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Quiver-Grills", image: "shoyu.jpg", rating: 5, comment: "uum! this is the food for my life" },
  { id: 2, name: "Kojiro Ramen", restaurant: "Moringa Kitchen", image: "kojiro.jpg", rating: 4, comment: "Very flavorful aroma in the food!" },
  { id: 3, name: "Gyukotsu Ramen", restaurant: "Soko-safi village", image: "gyukotsu.jpg", rating: 7, comment: "yeah! now this is a meal" },
  { id: 4, name: "Nirvana Ramen", restaurant: "KFC", image:
  "nirvana.jpg", rating: 5, comment: "Delicious!" },
  { id: 5, name: "naruto", restaurant: "Hongkong", image: "naruto.jpg", rating: 4, comment: "nice food! i am proposing to the chef lady right away." },
];

//create a display ramen function ()
function displayRamen()  {
  
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

let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
    let i;

    // get the array of divs' with classname image-sliderfade
    let slides = document.getElementsByClassName("slide-image");
    
    // get the array of divs' with classname dot
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        // initially set the display to
        // none for every image.
        slides[i].style.display = "none";
    }

    // increase by 1, Global variable
    slideIndex++;

    // check for boundary
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className += " active";

    // Change image every 2 seconds
    setTimeout(showSlides, 8000);
}

