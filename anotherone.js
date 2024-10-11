// Array of image URLs
const images = [
    'https://cdn.pixabay.com/photo/2023/12/12/18/18/ai-generated-8445710_1280.png',
    'https://source.unsplash.com/featured/?city',
    'https://source.unsplash.com/featured/?technolo',
    'https://cdn.pixabay.com/photo/2023/12/05/12/23/art-8431545_1280.png',
    'https://source.unsplash.com/featured/?mountain',
    'https://cdn.pixabay.com/photo/2023/12/12/18/18/ai-generated-8445710_1280.png',
    'https://source.unsplash.com/featured/?sky',
    'https://source.unsplash.com/featured/?animals',
    
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
