'use strict';

import fs from 'fs';
import bencode from 'bencode';

import dgram from 'dgram';
import Buffer from 'buffer';
import urlParse from 'url';

const torrent = bencode.decode(fs.readFileSync('Ludmilla-Winter-Owner.torrent'));
const url = urlParse(torrent.announce.toString('utf8'));

const socket = dgram.createSocket('udp4');
const myMsg = Buffer.from('hello?', 'utf8');

socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});

socket.on('message', msg => {
    console.log('message is ', msg);
});