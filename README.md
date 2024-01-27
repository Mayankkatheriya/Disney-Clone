# Disney+ Clone

## Overview

This project is a Disney+ clone that replicates the Disney+ streaming service, showcasing movies and TV shows from Disney, Pixar, Marvel, Star Wars, and National Geographic. It is built using React for the frontend, Firebase for authentication and database, and styled-components for styling.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)
- [Hosted Link](#hosted-link)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication using Firebase authentication.
- Dynamic rendering of movie data from Firebase Firestore.
- Responsive design for various screen sizes.
- Sliders and viewers for an engaging user interface.
- Movie details page with play and trailer options.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Mayankkatheriya/Disney-Clone.git
    ```

2. **Install dependencies:**

    ```bash
    cd Disney-Clone
    npm install
    ```

3. **Set up Firebase:**
    - Create a new project on [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
    - Replace the placeholders in `src/firebase.js` with your Firebase configuration.

4. **Run the application:**

    ```bash
    npm start
    ```

5. **Open in your browser:**
    - Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `public/`: Static assets and HTML template.
- `src/`: React application source code.
  - `components/`: Reusable React components.
  - `features/`: Redux slices for managing global state.
  - `firebase.js`: Firebase configuration and initialization.
  - `App.js`: Main application component.
  - `index.js`: Entry point for React application.

## Dependencies

- React
- React Router
- Redux Toolkit
- Firebase
- Styled Components
- React Slick

For a complete list of dependencies, check the `package.json` file.

## Screenshots

`Landing Page`
![image](https://github.com/Mayankkatheriya/Disney-Clone/assets/128832286/8d6be903-b8bb-49a4-85f4-ae728cdb916f)

`Home Page`
![image](https://github.com/Mayankkatheriya/Disney-Clone/assets/128832286/b01554ef-340f-46e8-96b4-03cb800a013e)

## Hosted Link

Check out the hosted version of the app [here](https://disney-clone-psi-henna.vercel.app/).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

No license yet
