function toggleImages(id) {
    const imagesDiv = document.getElementById(id);
    if (imagesDiv.style.display === "none" || imagesDiv.style.display === "") {
        imagesDiv.style.display = "block";
    } else {
        imagesDiv.style.display = "none";
    }
}
