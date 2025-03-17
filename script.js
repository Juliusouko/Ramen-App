const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 7, comment: "yeah! now this is a meal" }
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
          ${ramen.image}
        </div>
        <div class="rating"><p>${ramen.rating}</p></div>
        <div class="comment"><p>${ramen.comment}</p></div>`
  ))
}
displayRamen();






















































//let slideIndex = 1;
//showSlides(slideIndex);

//function plusSlides(n) {
  //showSlides(slideIndex += n);
//}

//function currentSlide(n) {
  //showSlides(slideIndex = n);
//}

//function showSlides(n) {
  //let i;
  //let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}
  //for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";  
  //}
  //for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
//}

//const ramens = [
  //{ id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  //{ id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  //{ id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
//];
