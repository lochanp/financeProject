# Finance Tracker Application

## Overview

## Please use the following credentials to login to the webApp

- \*\*userName : john
- \*\*password : 0987654321

This project is a finance tracker application built using React, Material UI, and Redux. It allows users to manage their income and expenses, categorize transactions, calculate total balance, and visualize income and expense trends. The application aims to provide a user-friendly interface with clean code practices and proper state management using Redux.

## Features

- **Adding Transactions**: Users can add income and expense transactions with categories, amounts, and dates.
- **Transaction Categorization**: Transactions are categorized for easy viewing.
- **Total Balance Calculation**: Users can calculate their total balance by subtracting total expenses from total income.
- **Charts (Optional)**: Basic charts such as bar charts can be implemented to visualize income and expense trends.
- **Material UI Styling**: Utilizes Material UI components for a visually appealing and user-friendly interface.
- **Redux State Management**: Manages application state including transactions, categories, and balance using Redux.
- **Adding Transaction Categories**: Users can add new transaction categories.
- **Local Storage Persistence**: Transaction data is persisted in local storage for data retention.

## Technical Requirements

- React with Hooks: Component logic is implemented using React hooks such as useState and useEffect.
  Redux for Global State Management: Utilizes Redux for managing global state including store, actions, and reducers.
- Local Storage or In-Memory Data Store: Transaction data is persisted either in local storage or a simple in-memory data store.
- Material UI Styling: Implements Material UI components for styling the application.
- Clean Code Practices: Maintains well-structured components, proper naming conventions.
- Clone the Repository: Clone the repository to your local machine.
- Install Dependencies: Run npm install or yarn install to install project dependencies.
- Run the Application: Run npm start or yarn start to start the development server.
- View in Browser: Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

finance-tracker-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── TransactionList.js
│ │ ├── AddTransactionForm.js
│ │ ├── CategoryManager.js
│ │ └── BalanceCalculator.js
│ │
│ ├── pages/
│ │ ├── LoginPage.js
│ │ └── Dashboard.js
│ │
│ ├── store/
│ │ ├── actions/
│ │ │ ├── actionTypes.js
│ │ │ └── transactionActions.js
│ │ │
│ │ ├── reducers/
│ │ │ ├── transactionReducer.js
│ │ │ └── rootReducer.js
│ │ │
│ │ └── store.js
│ │
│ ├── App.js
│ ├── index.js
│ └── App.css
│
└── README.md

## Further Enhancements

Delete Transactions: users are allowed to delete existing transactions.
