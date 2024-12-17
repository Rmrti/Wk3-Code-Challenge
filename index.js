// Base URL for API requests
const API_BASE_URL = "http://localhost:3000/films";

// Initialize the application once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadAllMovies();
});

// Function to fetch and display the list of movies
function loadAllMovies() {
  fetch(API_BASE_URL)
    .then((response) => response.json())
    .then((movies) => {
      if (movies.length > 0) {
        showMovieDetails(movies[0]); // Display the first movie's details by default
      }
      updateMovieMenu(movies); // Populate the movie menu with all movie titles
    })
    .catch((error) => console.error("Error fetching movies:", error));
}

// Function to display details of a selected movie
function showMovieDetails(movie) {
  // Select elements where movie details will be displayed
  const posterElement = document.getElementById("poster");
  const titleElement = document.getElementById("title");
  const runtimeElement = document.getElementById("runtime");
  const showtimeElement = document.getElementById("showtime");
  const ticketsAvailableElement = document.getElementById("tickets-available");
  const descriptionElement = document.getElementById("description");
  const buyTicketButton = document.getElementById("buy-ticket");
  const yearElement = document.getElementById("year");

  // Update elements with movie details
  posterElement.src = movie.poster;
  titleElement.textContent = movie.title;
  yearElement.textContent = movie.year;
  runtimeElement.textContent = `${movie.runtime} mins`;
  showtimeElement.textContent = `Showtime: ${movie.showtime}`;
  ticketsAvailableElement.textContent = movie.capacity - movie.tickets_sold;
  descriptionElement.textContent = movie.description;

  // Reset and configure the Buy Ticket button
  resetBuyButton();

  if (movie.tickets_sold >= movie.capacity) {
    buyTicketButton.classList.add("sold-out");
    buyTicketButton.textContent = "Sold Out";
    buyTicketButton.disabled = true;
  } else {
    // Attach an event listener for ticket purchase
    buyTicketButton.onclick = () => purchaseTicket(movie);
  }
}

// Function to reset the Buy Ticket button to its default state
function resetBuyButton() {
  const buyTicketButton = document.getElementById("buy-ticket");
  buyTicketButton.classList.remove("sold-out");
  buyTicketButton.textContent = "Buy Ticket";
  buyTicketButton.disabled = false;
}

// Function to populate the movie menu with a list of movie titles
function updateMovieMenu(movies) {
  const movieMenu = document.getElementById("movies-list");
  movieMenu.innerHTML = ""; // Clear the current menu

  // Create a list item for each movie
  movies.forEach((movie) => {
    const movieListItem = document.createElement("li");
    movieListItem.textContent = movie.title;

    // Mark the movie as sold out if applicable
    if (movie.tickets_sold >= movie.capacity) {
      movieListItem.classList.add("sold-out");
    }

    // Add an event listener to display movie details when clicked
    movieListItem.onclick = () => showMovieDetails(movie);

    // Append the list item to the menu
    movieMenu.appendChild(movieListItem);
  });
}

// Function to handle ticket purchase
function purchaseTicket(movie) {
  if (movie.tickets_sold < movie.capacity) {
    // Increment the number of tickets sold
    movie.tickets_sold += 1;

    // Send a PATCH request to update the tickets sold in the database
    fetch(`${API_BASE_URL}/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tickets_sold: movie.tickets_sold }),
    })
      .then(() => showMovieDetails(movie)) // Refresh movie details
      .catch((error) => console.error("Error purchasing ticket:", error));
  }
}
