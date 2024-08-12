function openFile() {
  setTimeout(() => {
    console.log("File Opened...");
  }, 3000);
}

function addSomething() {
  console.log("Something Added to the file... ");
}

function removeSomething() {
  console.log("Something Removed from File...");
}

openFile();
addSomething();
