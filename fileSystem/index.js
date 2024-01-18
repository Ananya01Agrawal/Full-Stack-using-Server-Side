const fs = require('fs')
const path = require('path')
let movie = path.join(__dirname, 'movie.json')
console.log(movie);

fs.writeFile('movie.json','[{"title":"The Matrix","year":1999,"rating":8.7},{"title":"The Godfather","year":1972,"rating":9.2},{"title":"The Dark Knight","year":2008,"rating":9},{"title":"Pulp Fiction","year":1994,"rating":8.9},{"title":"Schindler\'s List","year":1993,"rating":8.9}]', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('The file has been saved!');
}); 