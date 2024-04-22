const path = require('path');
const Max = require('max-api');
const fs = require('fs');

Max.addHandler('write', (fpath, fileName, ...values) => {
  // Join values array into a single line string separated by spaces
  const textContent = values.join(' ');

  const fullPath = path.join(fpath, fileName + '.txt');

  // Check if file exists, if not, create one
  if (!fs.existsSync(fpath)){
    fs.mkdirSync(fpath, { recursive: true });
  }

  // Write or append content to the file with newline character after each message
  fs.appendFileSync(fullPath, textContent + '\n');

  Max.post('File ' + fileName + '.txt updated successfully.');
});
