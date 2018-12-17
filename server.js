const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuid = require('uuid');

const PORT = 3001;

const wss = new SocketServer({ server });

wss.broadcast = (data) => {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send (data);
        }
    });
};

wss.numberOfOnlineUsers = 0;

wss.on('connection', (ws) => {
    wss.numberOfOnlineUsers++;
    const numberOfOnlineUsers = {
        type: "numberOfOnlineUsers",
        content: wss.numberOfOnlineUsers
    };
    wss.broadcast(JSON.stringify(numberOfOnlineUsers), ws);
        console.log('Client Connected');

    ws.on('message', (message) => {
        const newMessage = JSON.parse(message);
        switch (newMessage.type) {
            case "postMessage":
                newMessage.id = uuid();
                newMessage.type = "incomingMessage";
                wss.broadcast(JSON.stringify(newMessage), ws);
                break;
            case "postNotification":
                const newNotification = {
                    type: "incomingNotification",
                    content: newMessage.content
                };
                wss.broadcast(JSON.stringify(newNotification), ws);
                break;
            default:
                throw new Error("Unknown Type: " + newMessage.type);
        }
    });

    ws.on('close', () => {
        wss.numberOfOnlineUsers--;
        const numberOfOnlineUsers = {
            type: "numberOfOnlineUsers",
            content: wss.numberOfOnlineUsers
        };
        wss.broadcast(JSON.stringify(numberOfOnlineUsers), ws);
            console.log('Client Disconnected')
    });
});
