//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from the start of a string
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names
touristSpots.sort((a, b) => {
  let nameA = removeArticle(a).toLowerCase();
  let nameB = removeArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Select the ul element with id 'band'
const ulElement = document.getElementById('band');

// Create and append li elements to the ul element
touristSpots.forEach(spot => {
  const liElement = document.createElement('li');
  liElement.textContent = spot;
  ulElement.appendChild(liElement);
});

