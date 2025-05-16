const searchInput = document.getElementById("search");
const quoteList = document.getElementById("quoteList");
const errorDisplay = document.getElementById("error");
let quotes = [];

// Fetch quotes from API
fetch('https://dummyjson.com/quotes')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch quotes.");
    }
    return response.json();
  })
  .then(data => {
    quotes = data.quotes;
    displayQuotes(quotes);
  })
  .catch(error => {
    errorDisplay.textContent = "Error: " + error.message;
  });

// Display filtered quotes
function displayQuotes(filteredQuotes) {
  quoteList.innerHTML = "";
  filteredQuotes.forEach(quote => {
    const li = document.createElement("li");
    li.textContent = quote.quote;
    quoteList.appendChild(li);
  });
}

// Filter logic
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = quotes.filter(q => q.quote.toLowerCase().includes(searchTerm));
  displayQuotes(filtered);
});
