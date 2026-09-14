// fileManager.js
// File manager utility using the fs module (create, read, update, delete)

const fs = require("fs");

const filePath = "./test.txt";

console.log("File Manager started...");

// 1. Create File
console.log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }
  console.log("File Created");

  // 2. Read File
  console.log("Reading File");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }
    console.log(data);

    // 3. Update File (append)
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }
      console.log("File Updated");

      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err.message);
          return;
        }
        console.log(updatedData);

        // 4. Delete File
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }
          console.log("File Deleted");

          // Demonstrate graceful handling of a missing file
          fs.readFile(filePath, "utf8", (err) => {
            if (err) {
              console.log("Handled gracefully: File no longer exists.");
            }
            console.log("File Manager finished.");
          });
        });
      });
    });
  });
});