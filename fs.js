const fs = require('fs');

// fs.writeFile('text.txt', 'Hello content!',  (err) => {
//   if (err) throw err;
//   console.log('Saved!');
// });

fs.readFile('text.txt',function(err, result) {
    if (err) throw err;
    console.log(result.toString());
  });

//   fs.readFile('text.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });