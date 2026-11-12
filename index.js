'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('Ludmilla-Winter-Owner.torrent');
console.log(torrent.toString('utf8'));