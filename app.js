// app.js

// Logout functionality
const logoutButton = document.getElementById('logoutButton');

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    // 1. Clear any user session or authentication tokens
    // (Implementation depends on your authentication method - example with localStorage)
    localStorage.removeItem('authToken'); 

    // 2. Redirect the user to the login page
    window.location.href = '/login.html'; 
  });
}

// Upload functionality (example with FormData and fetch)
const uploadButton = document.getElementById('uploadButton');
const fileInput = document.getElementById('fileInput');
const categorySelect = document.getElementById('categorySelect');

if (uploadButton && fileInput && categorySelect) {
  uploadButton.addEventListener('click', async () => {
    const files = fileInput.files;
    const category = categorySelect.value;

    if (files.length === 0) {
      alert('Please select a file to upload.');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category); 

      try {
        const response = await fetch('/.netlify/functions/drive', { 
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully!');
          // Optionally, you can provide feedback to the user
        } else {
          console.error('Error uploading file:', response.status);
          // Handle errors and provide feedback to the user
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        // Handle errors and provide feedback to the user
      }
    }
  });
}