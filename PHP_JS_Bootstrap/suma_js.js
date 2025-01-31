document.querySelector(".btn").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
    this.style.color = "white";
});

document.querySelector(".btn").addEventListener("mouseout", function() {
    this.style.backgroundColor = "blue";
    this.style.color = "black";
});