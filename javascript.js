
console.log('hey');
const workButton = document.getElementById('workButton');
const infoBox = document.getElementById('infoBox');

// When button is clicked, toggle visibility of the info box
workButton.addEventListener('click', () => {
    infoBox.classList.toggle('show'); // Toggle the info box visibility
});