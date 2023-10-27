const LinkedList = require('./LinkedList');

class Queue {
    constructor() {
        this.queue = new LinkedList();
        this.size = 0;
    }

    enqueue(data) {
        this.queue.addToTail(data); //Add a new node to the queue. Call the method that adds a new value to the end of the underlying linked list.
        this.size++; //Tracks Number of nodes and increases or decreases the queue size
        console.log(`Added ${data}! Queue size is now ${this.size}`);
    }
}

module.exports = Queue;

const restaurantOrder = new Queue();
restaurantOrder.enqueue('Apple Pie');
restaurantOrder.enqueue('Roast chicken');
restaurantOrder.enqueue('Quinoa Salad');
console.log(`RestaurantOrders has ${restaurantOrder.size} nodes`);