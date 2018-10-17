// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

const broadcast = dataObj => {
  wss.clients.forEach(client => {
      client.send(JSON.stringify(dataObj))
    })
}

const sendUserCountMessage = () => {
  const userCountMessage ={
    type: "userCountUpdate",
    userCount: wss.clients.size
  }
  broadcast(userCountMessage)
}


wss.on('connection', (ws) => {
  console.log('Client connected');
  console.log(wss.clients.size);

sendUserCountMessage();
  //Set for counting how many clients are on the server

//     ws.on('message', (m) => {
//         console.log(m);
//     });
// });
//      const userCount = (wss.clients.size);
//      console.log(userCount);

    ws.on("message", (data) => {
     //   wss.clients.forEach((client) => {
     //  const userCount = wss.clients.size
     //  client.send(userCount);
     // })
       // console.log(userCount);

    const dataObj = JSON.parse(data);
    dataObj.uniqueKey = uuidv1();

    switch (dataObj.type) {

        case "postNewMessage":

        dataObj.type = "incomingNewMessage"

        break;


        case "postUserUpdate":

        dataObj.type = "incomingUserUpdate"

        break;

    }



    console.log(`${dataObj.username} says: ${dataObj.content}. Key: ${dataObj.uniqueKey}`)

    // ws.on("message", (message) => {
    wss.clients.forEach(client => {
      client.send(JSON.stringify(dataObj))
    })
  })


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => sendUserCountMessage());
});