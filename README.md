# E-commerce Application with Node.js
This is a simple e-commerce application built using Node.js, Express.js, and other essential technologies. The application allows users to browse products, add them to the cart, and place orders. It demonstrates how to implement fundamental e-commerce functionalities using Node.js.

# Features
* User registration and authentication
* Product browsing and searching
* Shopping cart functionality
* Order placement and payment integration (PayPal, Stripe, etc.)
* User profile and order history
 ## Installation
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
# Technologies Used
* Node.js: A server-side JavaScript runtime environment that allows us to build scalable and efficient applications.
* Express.js: A web application framework for Node.js, used to build the RESTful APIs and handle HTTP requests.
* MongoDB: A NoSQL database used to store product information, user details, and order history.
* Mongoose: An ODM (Object-Data Mapping) library for MongoDB, making it easy to work with the database in a structured manner.
* Express Sessions & Cookies: For handling user authentication and maintaining user sessions.
* Passport.js: A library used for authentication and user management.
* EJS (Embedded JavaScript): A templating engine used to generate dynamic HTML pages.
Stripe/PayPal API: To integrate payment functionality into the application.
# Prerequisites
* Node.js and npm (Node Package Manager) installed on your system.
* MongoDB installed and running locally or access to a remote MongoDB database.
* API keys from Stripe/PayPal or any other payment gateway you choose to integrate.
# Contribution
* Contributions are welcome! If you'd like to contribute to the project, feel free to submit pull requests or open issues.


 ## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2023 ©️ - MIT License
- [Ali Nour](https://github.com/alin00r)
- [karem hamed](https://github.com/karemhamed)
- [Albassel Abobakr](https://github.com/Bassel-11)
- [Mohammed Mostafa](https://github.com/mohammedd20)
