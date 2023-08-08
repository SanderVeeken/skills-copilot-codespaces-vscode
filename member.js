function skillsMember() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.opacity = "1";
        x.style.transition = "opacity 0.5s";
    } else {
        x.style.display = "none";
    }
}