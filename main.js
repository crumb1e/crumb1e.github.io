function showAbout() {
    var aboutText = document.getElementById("about-wrap");
    if(aboutText.style.display === "none") {
        aboutText.style.display = "block";
    } else {
        aboutText.style.display = "none";
    }
};