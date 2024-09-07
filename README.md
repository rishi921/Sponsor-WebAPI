# **Sponsor Web**

Welcome to **Sponsor WEB**. This project is a complete Full-Stack Web Application that delivers in-depth statistics and insights on Sponsors, Match Details, Sponsor Details, and also allows you to Add Payments. 

The Dashboard is powered by **React** for the Frontend, **.NET Core** for the Backend/Middleware, and **PostgreSQL** for Data Management.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Backend (ASP.NET)](#backend-aspnet)
3. [Frontend (React)](#frontend-react)
4. [Database (PostgreSQL)](#database-postgresql)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)
7. [License](#license)

## Project Structure

The project is divided into two main folders:

- **Backend**: Contains all the ASP.NET files, including middleware and database logic.
- **Frontend**: Contains all the React files, including the user interface and frontend logic.

## Backend (ASP.NET)

- **ASP.NET Version**: 3.1.12
- **Database**: PostgreSQL

The backend is responsible for handling all database operations, including CRUD (Create, Read, Update, Delete) operations. It also serves as middleware, handling requests and responses between the frontend and the database.

## Frontend (React)

- **React Version**: ^18.3.1
- **UI Libraries**: 
  - `"@fortawesome/fontawesome-free": "^6.6.0"`
  - `"bootstrap": "^5.3.3"`

The frontend is built using React, a popular JavaScript library for building user interfaces. It handles all client-side logic, including rendering components, handling user input, and making requests to the backend.

## Database (PostgreSQL)

- **PostgreSQL Version**: Postgres 16

The database is built using PostgreSQL, a powerful open-source relational database management system. It stores all data for the application, including user information, settings, and other relevant data.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rishi921/Sponsor-WebAPI.git
   cd Sponsor-WebAPI
