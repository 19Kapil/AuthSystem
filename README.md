# Authentication System with JWT and Refresh Tokens

This project demonstrates a simple authentication system built with Node.js, Express, JWT (JSON Web Tokens), and Refresh Tokens for secure user login and management. It provides the functionality to register, login, update user details, and logout users using access and refresh tokens.

## Overview

This authentication system handles:

1.  User Registration : Registers a new user with a unique email and password.
2.  User Login : Authenticates the user and generates JWT access and refresh tokens.
3.  Token-based Authentication : Secure access to protected routes using JWT tokens.
4.  Logout : Logs out the user by clearing the stored refresh token.
5.  User Profile Update : Allows the user to update their details, including name, email, and password.

## Features

-  JWT Access Tokens : Used for user authentication for a short duration (e.g., 15 minutes).
-  JWT Refresh Tokens : Used to get a new access token when the old one expires (valid for 7 days).
-  Token Expiration Handling : Access tokens expire after a short time, while refresh tokens allow re-authentication.
-  User Profile Update : Allows users to modify their profile details.
-  Secure Password Storage : Passwords are hashed before being stored in the database using bcrypt.

## Technologies Used

-  Node.js : JavaScript runtime for backend development.
-  Express : Web framework for building RESTful APIs.
-  JWT (jsonwebtoken) : For handling access and refresh tokens.
-  bcryptjs : For securely hashing passwords.
-  MongoDB : NoSQL database to store user data.
-  cookie-parser : For managing cookies (optional if you decide to store tokens in cookies).

## How It Works

### 1.  User Registration 

When a new user registers, their details are saved in the database. The password is hashed before storing it. The user receives a confirmation message upon successful registration.

### 2.  User Login 

When the user logs in, their credentials are validated. If correct, an access token (15 minutes) and a refresh token (7 days) are generated and sent back to the user. These tokens are used to authenticate the user on subsequent requests.

### 3.  Access and Refresh Tokens 

-  Access Token : Used to authenticate requests and has a short expiration time (e.g., 15 minutes).
-  Refresh Token : Can be used to refresh the access token when it expires (valid for 7 days).

### 4.  User Update 

The logged-in user can update their profile, including their name, email, and password. The password is hashed again if changed.

### 5.  Logout 

When the user logs out, the refresh token is deleted from the client (if stored in cookies or local storage), and the user is logged out successfully.

## Endpoints

### 1.  POST /register 

Registers a new user.

-  Request Body : `{"name": "User Name", "email": "email@example.com", "password": "yourpassword"}`
-  Response : `{"message": "User registered successfully"}`

### 2.  POST /login 

Logs in a user and returns access and refresh tokens.

-  Request Body : `{"email": "email@example.com", "password": "yourpassword"}`
-  Response : 
  ```json
  {
    "accessToken": "your-access-token",
    "refreshToken": "your-refresh-token"
  }

### Add the following variables to your .env file:

- `MONGO_URI=mongodb://localhost:27017/yourDb`
- `JWT_SECRET= <your-jwt-secret>`
  (Use your JWT secret key or generate one using the following command:
  `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
  This command generates a 64-byte (512-bit) random string and outputs it as a 128-character hexadecimal string, useful for secure values in cryptographic applications.
- `PORT=5000`

