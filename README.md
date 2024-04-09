# Blood Bank App
Blood Bank Management System is a software application designed to manage the workflow of a blood bank, including inventory management, donor management, hospital management, and blood transfusion management. This system helps in maintaining records efficiently and ensures timely availability of blood units as per requirement.

## Features

- **Inventory Management**: Tracks the inventory of blood units, including blood type, quantity, and expiration dates.
- **Donor Management**: Allows adding, editing, and searching for donors' information.
- **Hospital Management**: Enables hospitals to register, request blood units, and track their blood usage.
- **Blood Transfusion Management**: Facilitates the process of matching donors with recipients and recording blood transfusions.


## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git, GitHub
- **IDE**: Visual Studio Code

## Installation

1. **Clone the repository:**

git clone https://github.com/PoojaHasda/Blood-Bank-App.git

2. **Navigate to the project directory**
cd blood-bank-management-system

**Install all dependencies for both client and server:**
cd client <br>
npm install

cd ../server<br>
npm install


**Configure environment variables:**
Create a .env file in the root directory.
Define variables such as database connection URL, JWT secret, etc.

**Start the server:**
npm run dev

**Access the application in your web browser:**
http://localhost:3000


## MVC Architecture
Blood Bank Management System follows the MVC (Model-View-Controller) architecture pattern:
**Model (M):** The database schema and operations are handled in the backend server using MongoDB. It defines the structure of data including donors, inventory, hospitals, etc.

**View (V):** The user interface is implemented using React.js in the frontend. It represents the presentation layer and interacts with the users.

**Controller (C):** The backend server built with Node.js and Express.js acts as the controller. It handles the business logic, requests from the frontend, and communicates with the database.