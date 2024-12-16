/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

const quotes = [ 
    { text: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca", explanation: "Explanation: This quote emphasizes that the fear of death can limit us from living a meaningful life. If we are constantly afraid of dying, we avoid risks, challenges, and even important decisions that could lead to growth and fulfillment. Seneca encourages us to embrace life fully without letting the fear of death dictate our actions."}, 
    // Add more quotes as needed 
]; 
 
function displayQuote() { 
    const today = new Date(); 
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24); 
    const quoteIndex = dayOfYear % quotes.length; // Loop through quotes 
    const quote = quotes[quoteIndex]; 
 
    document.getElementById('quote').innerText = quote.text; 
    document.getElementById('author').innerText = `- ${quote.author}`; 
    document.getElementById('explanation').innerText = `- ${quote.explanation}`; 
} 
 
displayQuote(); 


window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
