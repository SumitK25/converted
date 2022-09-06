const fs = require('fs');

var base64str = base64_encode('smiley.avif');
console.log(base64str);
function base64_encode(file) {
    return "data:image/gif;base64," + fs.readFileSync(file, 'base64');
}