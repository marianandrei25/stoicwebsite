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
    { text: "We suffer more often in imagination than in reality.", author: "Seneca", Explanation: "This quote emphasizes that much of our suffering comes from worry and fear about things that might happen, rather than the actual events themselves. Seneca teaches us to focus on the present and not be overwhelmed by hypothetical concerns." }, 
    { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", Explanation: "Marcus Aurelius reminds us that while we cannot control external events, we have full control over how we perceive and react to them. Our inner mindset and attitude are the keys to emotional strength and resilience." }, 
    { text: "It is not what happens to you, but how you react to it that matters", author: "Epictetus" }, 
    { text: "You have to be odd to be number one.", author: "Dr. Seuss" }, 
    { text: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca", explanation: "Explanation: Quote produced today"},
  { text: "Man is disturbed not by things, but by the views he takes of them.", author: "Epictetus", Explanation: "Explanation: This quote explains that it's not the events themselves that cause us distress, but our interpretations of those events. If we can change our perspective, we can lessen our suffering and approach challenges with a clearer mind."},
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
