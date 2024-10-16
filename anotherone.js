// Array of image URLs
const images = [
    'https://cdn.pixabay.com/photo/2023/12/05/12/23/art-8431545_1280.png',
    'https://cdn.pixabay.com/photo/2023/05/14/07/11/philosopher-7992125_1280.jpg',
];

// Function to get the current day of the year
function getDayOfYear() {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = new Date() - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Function to display the daily image
function displayDailyImage() {
    const dayOfYear = getDayOfYear();
    const imageIndex = dayOfYear % images.length;
    const imageElement = document.getElementById('daily-image');
    imageElement.src = images[imageIndex];
}

// Event listener for the button
document.getElementById('new-image-btn').addEventListener('click', displayDailyImage);

// Display the image when the page loads
window.onload = displayDailyImage;
