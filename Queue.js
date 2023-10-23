const LinkedList = require('./LinkedList');

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }
}

module.exports = Queue;