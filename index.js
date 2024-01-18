const fs = require('fs');

// File content to be written
const content = 'Hello, this is the content of the file.';

// Specify the file path and name
const filePath = 'example.txt';

// Write to the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File has been written successfully!');
  }
});
