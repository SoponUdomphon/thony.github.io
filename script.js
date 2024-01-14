function myFunction() {
    var x = document.getElementById("hidden");
    var y = document.querySelector('.btn-info');
    if (x.style.display === "none") {
      x.style.display = "block";
      y.textContent = "No more";
    } else {
      x.style.display = "none";
      y.textContent = "Know more";
    }
  }