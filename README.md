# AI Prompt Share

Welcome to AI Prompt Share! This repository houses a Full-Stack CRUD (Create, Read, Update, Delete) Application that allows users to search, create, and share AI prompts with each other. Whether you're seeking inspiration for your AI projects or want to contribute your own prompts, this platform is designed to facilitate collaboration and idea sharing.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

AI Prompt Share is a Full-Stack CRUD Application that enables users to engage in a collaborative environment focused on AI prompts. The main features of this application include:

- **Search**: Users can search for AI prompts using keywords or tags.
- **Create**: Users can create and submit their own AI prompts to share with the community.
- **Share**: AI prompts can be easily shared with other users via the platform.
- **Update**: Users can update and modify their own submitted prompts.
- **Delete**: Users have the ability to delete their own prompts if desired.

This repository is based on the project developed by [JavaScript Mastery](https://github.com/adrianhajdin) called [project_next_13_ai_prompt_sharing](https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing). We would like to express our gratitude to JavaScript Mastery for their contributions to the open-source community and acknowledge their work as the foundation for AI Prompt Share.


## Getting Started

To get started with AI Prompt Share, follow these steps:

1. **Clone the repository**:
   Begin by cloning this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/ChrisM922/project_prompt_share.git
   ```
3. **Install dependencies**:
    Navigate to the root directory of the project and install the required dependencies by running the following command:
   ```bash
   npm install
   ```
5. **Set up MongoDB**:
   AI Prompt Share uses MongoDB as its database. Follow these instructions to set up MongoDB locally:
   - Install MongoDB on your machine by following the official [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).
   - Start the MongoDB server by running the appropriate command for your operating system.
   - Update the database connection settings in the project's configuration file (config/database.js) and .env file, to match your MongoDB configuration.

7. **Set up Google Cloud OAuth**:
   AI Prompt Share uses Google Cloud OAuth for user authentication. Follow these instructions to set up Google Cloud OAuth:
   - Create a new project in the [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the Google OAuth API for your project.
   - Set up OAuth consent screen by providing the necessary information.
   - Create credentials (OAuth 2.0 client ID) for your application.
   - Obtain the client ID and client secret.
   - Update the OAuth client configuration in the project's configuration file (app/api/[...nextauth]/route.js) or with your .env file with client ID and client secret.

5. **Start the server**:
   Launch the server by running the following command:
     ```bash
     npm run dev
     ```
7. **Access the application**:
   Once the server is up and running, you can access the AI Prompt Share application by opening your web browser and navigating to the specified URL.

## Usage

- **Search for AI prompts**: Use the search functionality to find AI prompts based on keywords or tags of interest.
- **Create a new AI prompt**: Create and submit your own AI prompts by filling out the necessary information in the provided form.
- **View prompt details**: Click on a prompt to view detailed information about it, including the description, tags, and the user who created it.
- **Update a prompt**: If you're the creator of a prompt, you can update and modify its details as needed.
- **Delete a prompt**: As the creator of a prompt, you have the option to delete it from the platform.

## Contributing

AI Prompt Share welcomes contributions from the community. To contribute to the repository, please follow these guidelines:

1. **Fork the repository**: Click on the "Fork" button at the top right corner of the repository page to create a copy under your GitHub account.

2. **Create a new branch**: Create a new branch in your forked repository and switch to it to make your changes.

3. **Make your changes**: Contribute to the development of AI Prompt Share by adding new features, fixing bugs, or improving existing functionality.

4. **Commit and push**: Commit your changes and push them to your forked repository. Use the following commands:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
  ```

5. **Submit a pull request**: Go to the original repository on GitHub and submit a pull request to have your modifications reviewed and merged into the main repository. Provide a clear and concise explanation of the changes you've made in the pull request description.
Please ensure that your contributions align with the project's guidelines and that any new features or changes are thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE). By contributing to this repository, you agree to license your contributions under the same license.
