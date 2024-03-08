# Authentication API

A mock api for authentication and authorization.

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Table of contents

- [Authentication API](#authentication-api)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
      - [Features](#features)
    - [User Authentication](#user-authentication)
    - [Security](#security)
  - [Built with](#built-with)
      - [Database](#database)
  - [Contributing](#contributing)
  - [Getting Started](#getting-started)

## Overview

#### Features

### User Authentication

- **User Registration**: Users can sign up for an account by providing basic information such as username, email, and password.
- **User Login**: Registered users can log in securely using their credentials.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for secure authentication and authorization of users.

### Security

- **Password Hashing**: User passwords are securely hashed before storing them in the database to ensure confidentiality.
- **HTTPS**: Communication between the client and server is encrypted using HTTPS to prevent eavesdropping and man-in-the-middle attacks.

</div>

<hr/>

## Built with

- Node.js
- Express.js

#### Database

- Mongo **DB**

> This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) message and [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design pattern

<hr/>

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Getting Started

1. Clone the repository.
2. Install dependencies for both api and client: `npm install`

   ```


   //backend
   DB_URI=(eg. mongodb://127.0.0.1:27017/)
    SALT=(eg. 10)
    ACCESS_TOKEN_SECRET=(eg. secret)
   ```

3. Set up environment variables such as database connection string, JWT secret key, etc.
4. Start the server: `npm start`
