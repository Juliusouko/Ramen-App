const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Quiver-Grills", image: "shoyu.jpg", rating: 5, comment: "uum! this is the food for my life" },
  { id: 2, name: "Kojiro Ramen", restaurant: "Moringa Kitchen", image: "kojiro.jpg", rating: 4, comment: "Very flavorful aroma in the food!" },
  { id: 3, name: "Gyukotsu Ramen", restaurant: "Soko-safi village", image: "gyukotsu.jpg", rating: 7, comment: "yeah! now this is a meal" },
  { id: 4, name: "Nirvana Ramen", restaurant: "KFC", image:
  "nirvana.jpg", rating: 5, comment: "Delicious!" },
  { id: 5, name: "naruto", restaurant: "Hongkong", image: "naruto.jpg", rating: 4, comment: "nice food! i am proposing to the chef lady right away." },
];

//create a diplay ramen function ()
function displayRamen()  {
  //console.log(ramens.length);
  let ramenDetail = document.getElementById("container");
  ramenDetail.innerHTML = '';
  ramens.forEach((ramen) => (
    ramenDetail.innerHTML 
    += `<div class="image">
        <div class="name">${ramen.name}</div>  
          <div class="restaurant">${ramen.restaurant}</div>
          <img src="images/${ramen.image}" alt="${ramen.name}">
        </div>
        <div class="rating"><p>${ramen.rating}</p></div>
        <div class="comment"><p>${ramen.comment}</p></div>`
  ))

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex -1].style.display = "block";
  }
}
displayRamen();
