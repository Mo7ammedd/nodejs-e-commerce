# E-commerce Node.js

## Description
Secure E-commerce website with Node.js, Express js, and Mongoose.



## Run
To run the application, follow these steps:

1. Set up environmental variables:
   Create a file named `.env` at the root of the project and add the following lines to it:
   ```
   MONGO_URI=<your_mongo_uri>
   JWT_SEC =<your_JWT_secret>
   STRIPE_PRIVATE_KEY=<your_stripe_private_key>
   ```
   Replace `<your_mongo_uri>`, `<your_JWT_secret>`, and `<your_stripe_private_key>` with the appropriate values you obtained for your MongoDB Atlas database, JWT secret, and Stripe private API key respectively.

2. Navigate to the "DB" folder:
   Go to the "DB" folder in the project directory, and you'll find files related to your MongoDB database.

3. Fill your MongoDB Atlas database:
   Use the files in the "DB" folder to populate your MongoDB Atlas database with the required data for the application to function correctly.

4. Install dependencies:
   Open a terminal or command prompt in the root of the project directory, and run the following command to install the required dependencies:
   ```
   npm install
   ```

5. Start the application:
   After the installation is complete, run the following command in the terminal to start the application:
   ```
   npm start
   ```

Now the application should be up and running. You can access it through your browser at the specified URL 
```(usually http://localhost:3000)```. 
Make sure your MongoDB Atlas database is properly connected, and you can interact with the application.

## Technology

The application is built with:

- Node.js version 18.17.0 LTS
- MongoDB version 7.4.0
- Express version 4.18.2
- bcrypt  version  5.1.0 
- dotenv version 16.3.1 
- jsonwebtoken version 9.0.1
- mongoose version 7.4.0
- nodemon version 3.0.1
- route version 0.2.5

 
## Features
- User Authentication: We've implemented strong user authentication using bcrypt to protect user passwords effectively.
- Secure Transactions: Our platform uses encryption and HTTPS to ensure safe and confidential transactions.
- JWT Sessions: Enhancing security with JSON Web Tokens for efficient user session management.
- Scalable Architecture: Built for scalability, so it can handle a growing user base with ease.
- Efficient Database: Optimized database interactions with Mongoose for faster response times.

## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

- username (String)
- email (String)
- password (String)

### Product Schema:

- title (String)
- description (String)
- img (String)
- categories (Array)
- size (Array)
- color (Array)
- price (Number)
- inStock (Boolean)

### Cart Schema:
- userId (String)
- products:
- [
- productId (String)
- quantity (Number) ->default: 1,
  ]

### Order Schema:
- userId (String)
- products:
- [
- productId (String)
- quantity (Number) ->default: 1,
  ]
- amount (Number)
- address (Object)
- status (String) -> default: "pending"


## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2023 © [Ali Nour](https://github.com/alin00r)
