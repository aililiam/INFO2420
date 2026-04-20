var images = [];

function preloadImages() {
    images[0] = new Image();
    images[0].src = "Images/NCLogo2.jpg";

    images[1] = new Image();
    images[1].src = "Images/FullSize/Image1Lg.jpg";

    images[2] = new Image();
    images[2].src = "Images/FullSize/Image2Lg.jpg";

    images[3] = new Image();
    images[3].src = "Images/FullSize/Image4Lg.jpg";
}

function swapImage(newImage) {
    document.getElementById("FullSize").src = newImage;
}