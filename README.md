
Project Overview
This project is a full-stack web application built using React, React Router, and JSON Server. It allows users to create, view, edit, and delete posts. The application interacts with a db.json file to simulate the backend database for storing posts. The application also uses a modal to display post details and enable editing.
Features
Post Listing: View a list of posts.
Post Details: Click on a post to view the content and title in a modal.
Post Editing: Edit a post's content and update it through the modal.
Post Deletion: Delete a post from the database.
Responsive Design: The app is built to be responsive and works well on both mobile and desktop.
Technologies Used
React.js: For building the user interface and managing state.
React Router: For handling routing and navigation within the application.
JSON Server: A fake REST API server to simulate a real backend with db.json as the data source.
Ant Design: For UI components, specifically the modal for editing post details.
Vite: For fast and optimized development and build environment.
Project Setup




Step 1: Clone the Repository
Clone the repository to your local machine using the following command:





Step 2: Install Dependencies
Install the necessary dependencies using npm:
npm install



Step 3: Run the Application
To run both the development server and the JSON Server API simultaneously, use the following command:
npm run dev
This command runs the react-scripts start to launch the React app and json-server to simulate a backend on port 5000.



Step 4: Access the Application
Once the development server is running, you can access the app at:
http://localhost:5173
And the mock API server will be running at:
http://localhost:5000



Step 5: Editing and Deleting Posts
Editing Posts: When viewing a post's details, click the title to open the modal. You can update the content of the post and submit the changes, which will reflect on the app.
Deleting Posts: Click the delete button to remove the post from both the UI and the backend (db.json).
db.json Explanation
The db.json file serves as a mock database for the application, provided by JSON Server. It stores the posts data, allowing us to simulate a REST API that can handle CRUD operations (Create, Read, Update, Delete).

Here’s the structure of db.json:

{
  "posts": 
  
  [

   
    {
      "id": "0661",

      "title": "I am 15 years old"
      
      "content" : "N/A"
      
    }
    
  ]
  
}
Why I Created db.json
Data Persistence: The db.json file stores the posts data, allowing the application to simulate interaction with a real backend. JSON Server acts as a lightweight, fast server that mimics the behavior of a REST API.
Simplicity: Instead of setting up a complex backend server, I chose to use JSON Server because it simplifies the process of storing and retrieving data during development. It enables quick prototyping without worrying about the complexity of setting up a real database.
Learning & Flexibility: By using db.json, I can focus on learning how to connect the front-end with a back-end and practice API interactions while having the flexibility to add more endpoints and data types in the future.



package.json Scripts
The following scripts are defined in the package.json file to run the project:

scripts": 

{

    "start": "react-scripts start",
    
    "server": "json-server --watch db.json --port 5000",
    
    "dev": "concurrently \"npm run start\" \"npm run server\" \"vite\""
    
  },


npm run start: This starts the React development server, which is used to serve the front-end of the application.
npm run server: This runs the JSON Server, which watches the db.json file for changes and simulates a backend API for CRUD operations.
npm run dev: This command uses the concurrently package to run both the React development server and the JSON Server simultaneously, allowing you to develop and test the app with the API server running in the background.
Conclusion
This project is a simple CRUD application using React and JSON Server. It allows for quick iteration and testing of front-end functionality with a mock backend, making it a great starting point for building full-stack applications. The use of db.json and JSON Server provides a lightweight solution for development without the overhead of a full database setup.



