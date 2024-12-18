##Flatdango Cinema App

Flatdango is a web application for Flatiron Movie Theater, allowing users to view movie details and purchase tickets online. This project demonstrates dynamic web development using JavaScript, DOM manipulation, and server communication with a JSON DB server.

#Features 

1.View Movie Details:
        Displays details of the first movie (title, runtime, showtime, tickets available, and poster) on page load.
        The number of available tickets is dynamically calculated as capacity - tickets_sold.

2.Movie Menu:
        Shows a menu of all available movies in a list format.

3.Buy Tickets:
        Allows users to purchase tickets for a movie.
        Updates the number of available tickets in real-time.
        Prevents purchasing tickets when a movie is sold out.

4.Dynamic Movie Switching (Bonus):
        Clicking a movie in the menu displays its details.

5.Sold Out Indication (Bonus):
        Marks sold-out movies in the menu and updates the "Buy Ticket" button to show "Sold Out".

6.Server Interaction (Extra Bonus):
        Persists ticket purchase updates to the server.
        Supports deleting movies via the menu.

#Installation 

1.Clone the Repository

        git clone <git@github.com:Rmrti/Wk3-Code-Challenge.git>
        cd Wk3-Code-Challenge

2.Install JSON Server
Ensure you have Node.js installed. Then, install json-server globally:

        npm install -g json-server

3.Run the JSON Server
Start the server to serve the movie database:

    json-server --watch db.json

    The server will run on http://localhost:3000.

4.Open the Application
5.Open the index.html file in your browser to run the app.

##Usage 

1.View Movie Details
        The first movie's details are automatically displayed when the page loads.

2.Browse Movies
        See a list of all available movies on the left side of the page.

3.Buy Tickets
        Click the "Buy Ticket" button to purchase a ticket.
        If no tickets are available, the button will display "Sold Out".

4.Dynamic Updates
        Click on any movie in the menu to view its details.

##API Endpoints 

Get All Movies
GET /films
Example Response:

        [
        {
            "id": 1,
            "title": "The Wolf of Wall Street",
            "year": 2013,
            "runtime": 180,
            "capacity": 30,
            "showtime": "04:00PM",
            "tickets_sold": 24,
            "description": "In 1987, Jordan Belfort takes an entry-level job at a Wall Street brokerage firm. By the early 1990s, while still in his 20s...",
            "poster": "./images/wolf-of-wall-street.webp"
            }
        ]

Get Movie by ID
GET /films/:id

Update Tickets Sold
PATCH /films/:id
Request Body:

    {
      "tickets_sold": 28
    }

    Delete a Movie
    DELETE /films/:id

#Project Structure 

    index.html: The main HTML structure for the application.
    style.css: Contains all the styling for the application.
    index.js: Handles DOM manipulation, event listeners, and server communication.
    db.json: Local server database containing movie data.

##Development Process 
Core Steps

1.Setup Project Environment
        Created a GitHub repository and set up JSON server.

2.Fetch Data from JSON Server
        Implemented GET requests to display movies and their details.

3.Dynamic DOM Updates
        Populated the movie menu and updated movie details dynamically.

4.Event Handling
        Implemented ticket purchase logic and disabled buying tickets for sold-out movies.

5.Bonus Features
        Added sold-out indicators and persisted changes to the server.


#Author 

Created by Robin Mutuma as part of the Flatiron School curriculum.

#License 

This is a free to use and modify the project.
