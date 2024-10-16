// Array of images (You can add URLs to your own images)
const images = [
    'https://media.istockphoto.com/id/1171966918/photo/gypsum-copy-of-ancient-statue-seneca-head-on-dark-textured-background-plaster-sculpture-man.jpg?s=1024x1024&w=is&k=20&c=o3wkOVDnSnjaIU1wNMqb1IFRy4Ed6hsPJGyaNF79bmE=',
    'https://media.istockphoto.com/id/1171966918/photo/gypsum-copy-of-ancient-statue-seneca-head-on-dark-textured-background-plaster-sculpture-man.jpg?s=1024x1024&w=is&k=20&c=o3wkOVDnSnjaIU1wNMqb1IFRy4Ed6hsPJGyaNF79bmE=',
];

// Function to get a random image based on the current day
function getDailyImage() {
    const date = new Date();
    const dayIndex = date.getDate() % images.length; // Get the index based on day of the month
    return images[dayIndex];
}

// Set the daily image
window.onload = function() {
    const imgElement = document.getElementById('dailyImage');
    imgElement.src = getDailyImage();
};
