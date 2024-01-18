const fs = require('fs');
const path = require('path');

let movie = path.join(__dirname, 'movie.json');
console.log(movie);

fs.readFile(movie, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
}
);
