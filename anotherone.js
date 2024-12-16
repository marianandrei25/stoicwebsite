// Array of images (You can add URLs to your own images)
const images = [
    'https://img.freepik.com/free-photo/view-ancient-greek-bust-figure_23-2151616992.jpg?t=st=1729098441~exp=1729102041~hmac=e71cb49fb00007a87ed711ca51e2514e90aef5948e29eef66665573a4ac10d08&w=996',
    'https://img.freepik.com/free-photo/view-ancient-greek-bust-figure_23-2151616992.jpg?t=st=1729098441~exp=1729102041~hmac=e71cb49fb00007a87ed711ca51e2514e90aef5948e29eef66665573a4ac10d08&w=996',
    'https://img.freepik.com/free-photo/view-ancient-greek-bust-figure_23-2151616992.jpg?t=st=1729098441~exp=1729102041~hmac=e71cb49fb00007a87ed711ca51e2514e90aef5948e29eef66665573a4ac10d08&w=996',

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
