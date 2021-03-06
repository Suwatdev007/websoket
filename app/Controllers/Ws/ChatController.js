'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage (data) {
    console.log(data)
    this.socket.broadcastToAll('message', data)
  }
}

module.exports = ChatController
