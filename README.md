# Wedding Planner Web App Readme

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Welcome to the Wedding Planner Web App! This web application is designed to help couples plan their dream wedding effortlessly. Whether you're just starting or have already begun the planning process, our app will assist you in organizing every detail of your special day. From managing guest lists to tracking expenses and creating a personalized timeline, we've got you covered.

![Wedding Planner Screenshot](wedding-planner-screenshot.png)

## Features

### 1. User Registration and Authentication
- Register and create a secure account to access all features.
- Login with your credentials to manage your wedding plans.

### 2. Guest List Management
- Easily add, edit, and remove guests from your list.
- Track RSVPs and meal preferences.
- Generate printable guest lists.

### 3. Budget Tracker
- Set your wedding budget and monitor expenses.
- Categorize expenses (venue, catering, attire, etc.).
- Receive budget recommendations based on your preferences.

### 4. Vendor Management
- Keep track of potential and booked vendors (photographers, florists, etc.).
- Store contact information and contracts for easy access.

### 5. Wedding Timeline
- Create a personalized timeline with tasks and deadlines.
- Receive reminders for upcoming tasks.
- Stay on top of your wedding planning schedule.

### 6. Payment Board
- Collect and organize wedding Budgets.
- Share your recept.

### 7. Guest Communication
- Send invitations and updates to guests via email or messages.

## Getting Started

Follow these steps to get started with the Wedding Planner Web App:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Mekb3588/wedding-planner-app.git
   ```

2. **Install Dependencies**
   ```bash
   cd wedding-planner-app
   npm install
   ```

3. **Set Up the Database**
   - Configure your database settings in `config/database.js`.
   - Run database migrations to set up the required tables.

4. **Set Environment Variables**
   - Create a `.env` file in the root directory and set your environment variables, including database credentials, secret keys, and API keys.

5. **Start the Application**
   ```bash
   npm start
   ```

6. **Access the App**
   - Open your web browser and navigate to (https://weddingplan.vercel.app/).

## Usage

1. **User Registration**
   - Register for an account using your email address.

2. **Dashboard**
   - After logging in, you'll land on your personalized dashboard.
   - Explore the various features of the app from the sidebar menu.

3. **Start Planning**
   - Begin by adding guests, setting your budget, and creating your wedding timeline.
   - Explore other features like vendor management, inspiration boards, and guest communication.

## Technologies Used

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - React.js for the user interface
  - Redux for state management
  - Axios for API communication

- **Backend:**
  - Node.js and Express.js for the server
  - MongoDB for the database
  - Passport.js for authentication

- **Deployment:**
  - Host the app on a cloud platform (e.g., Render, Varcel).

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for choosing the Wedding Planner Web App. We hope it helps you plan the perfect wedding day! If you encounter any issues or have suggestions for improvement, please don't hesitate to contact us.

Happy planning! ❤️🎉
