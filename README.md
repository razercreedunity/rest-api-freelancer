# RESTful API For Freelancer Application

This project involves developing a RESTful API to manage freelancer registration, deletion, update, and retrieval using HTTP verbs such as `GET`, `POST`, `PATCH`, and `DELETE`.

## Live Server

The RESTful API is deployed and accessible at [https://rest-api-freelancer.vercel.app/](https://rest-api-freelancer.vercel.app/).

## Technologies Used

- MongoDB: Database for storing freelancer information.
- Express.js: Server-side framework for handling API requests.
- Angular: Front-end framework for building the user interface.
- Node.js: JavaScript runtime environment.
- Vercel: Deployment platform for hosting the RESTful API.

## Register a Freelancer

- URL: `/post`
- Method: `POST`
- Description: Creates a new freelancer with the provided details.
- Request Body:
  - `username`: (string) The username of the freelancer.
  - `email`: (string) The email address of the freelancer.
  - `phoneNumber`: (string) The phone number of the freelancer.
  - `skillsets`: (string) The skillsets possessed by the freelancer.
  - `hobby`: (string) The hobby of the freelancer.

## Delete a Freelancer

- URL: `/delete/{userId}`
- Method: `DELETE`
- Description: Deletes the freelancer with the specified `_id`.
- Parameters:
  - `_id`: (string) The unique identifier of the freelancer.

## Update a User

- URL: `/update/{userId}`
- Method: `PATCH`
- Description: Partially updates the freelancer details with the provided data.
- Parameters:
- Request Body: (Any of the following fields can be updated)
  - `username`: (string) The updated username of the freelancer.
  - `email`: (string) The updated email address of the freelancer.
  - `phoneNumber`: (string) The updated phone number of the freelancer.
  - `skillsets`: (string) The updated skillsets of the freelancer.
  - `hobby`: (string) The updated hobby of the freelancer.


## Get All Freelancers

- URL: `/getAll`
- Method: `GET`
- Description: Retrieves a list of all freelancers.

## User Model Attributes

The user model includes the following attributes:

- `username`: (string) The username of the freelancer.
- `email`: (string) The email address of the freelancer.
- `phoneNumber`: (string) The phone number of the freelancer.
- `skillsets`: (string) The skillsets possessed by the freelancer.
- `hobby`: (string) The hobby of the freelancer.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/razercreedunity/rest-api-freelancer.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. Access the API endpoints at http://localhost:8080.