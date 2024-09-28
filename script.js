// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var carouselIndicators = document.querySelector(".carousel-indicators");


for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    // Ocultar los carousel indicators
    if (carouselIndicators) {
      carouselIndicators.style.display = "none";
    }
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Detectar clic fuera del modal-content
document.getElementById('myModal').addEventListener('click', function (event) {
  const modalContent = document.querySelector('.modal-content');
  
  // Verifica si el clic fue fuera de modal-content
  if (!modalContent.contains(event.target)) {
    this.style.display = 'none'; // Cierra el modal

    if (carouselIndicators) {
      carouselIndicators.style.display = "flex";
    }
  }
});
