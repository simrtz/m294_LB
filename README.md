# Getting this App to Work

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install packages

First of all you should install all the packages in the project directory using:

### `npm i`

## Start the React App

In the project directory, you can then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

However, you won't be able to Login, Sign Up or create tasks. This is because you need to...

## Start the Json-Server

To start the Json-Server you can use:

### `json-server db.json -m ./node_modules/json-server-auth`

This command will enable you to interact with the API on [http://localhost:3000](http://localhost:3000)
in your Browser. Without the Json-Server, CRUD functionalities and Authentification won't be available.

