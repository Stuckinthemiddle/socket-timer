import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb, interval) {
    console.log('entered subscribeToTimer');
    // register handler for timer event
    socket.on('timer', timestamp => cb (null, timestamp));
    // send (emit) event to server - subscribe to receive
    // timer events every 1000 ms

    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }