# Gyanganj - Secure File Sharing

**Gyanganj** is a secure file-sharing web application built with Netlify. It allows users to upload, organize, and share files with ease, while leveraging Google Drive for secure storage and management.

## Features

* **User Authentication:** Secure user accounts with username/password login.
* **Google Drive Integration:**  Files are securely stored and managed in your Google Drive.
* **File Upload:** User-friendly interface for uploading files.
* **Folder Organization:** Create folders and subfolders to organize files.
* **File Sharing:**  Share files with others through unique links or folder access.
* **Data Security:**  Prioritizes data security with secure authentication and API key management.

## Technologies Used

* **Netlify:**  For hosting, serverless functions, and continuous deployment.
* **HTML, CSS, JavaScript:**  For frontend development.
* **Netlify Functions:** For backend logic (user authentication, Google Drive interaction).
* **Google Drive API:** For interacting with Google Drive.
* **[Database of your choice]:** For storing user data (e.g., FaunaDB, MongoDB Atlas).

## Getting Started

1. **Clone the repository:** `git clone https://github.com/adiz777/gyanganj.git` 
2. **Install dependencies:** `npm install`
3. **Set up environment variables:**
    * Create a `.env` file in the root directory.
    * Add your Google Drive API credentials and database connection details.
4. **Run the development server:** `netlify dev`
5. **Deploy to Netlify:** Push your changes to your GitHub repository, and Netlify will automatically build and deploy your website.

## Folder Structure
