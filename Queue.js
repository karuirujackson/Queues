const LinkedList = require('./LinkedList');

class Queue {
    constructor(maxSize = Infinity) { //Infinity is a number larger than all others and acts as a threshold/ceiling we cannot pass. 
        this.queue = new LinkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }

    //Checks if the current size of the queue is less than the maximum size.
    hasRoom() {
        if (this.size < this.maxSize) {
            return true;
        } else {
            return false;
        }
    }

    //Checks whether the queue is empty thus an underflow
    isEmpty() {
        if (this.size >= 1) {
            return false;
        } else {
            return true;
        }
    }

    //Adds node to the tail
    enqueue(data) {
        if (this.hasRoom()) { //Checks whether the queue has enough room to add another node.
            this.queue.addToTail(data); //Add a new node to the queue. Call the method that adds a new value to the end of the underlying linked list.
            this.size++; //Tracks Number of nodes and increases or decreases the queue size
            console.log(`Added ${data}! Queue size is now ${this.size}`);
        } else {
            throw new Error('Queue is full!');
        }
        
    }

    //Removes nodes from the head
    dequeue() {
        if (!this.isEmpty()) { //Checks whether the queue is empty thus avoid underflow
            const data = this.queue.removeHead();
            this.size--;
            console.log(`Removed ${data}! Queue size is ${this.size}`);
            return data;
        } else {
            throw new Error('Queue is empty!') //When nothing to remove then throw error message
        }
    }
}

module.exports = Queue;

const restaurantOrder = new Queue();
restaurantOrder.enqueue('Apple Pie');
restaurantOrder.enqueue('Roast chicken');
restaurantOrder.enqueue('Quinoa Salad');

console.log(`RestaurantOrders has ${restaurantOrder.size} nodes`);
console.log('\nFood Preparing...\n');

restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();

console.log('\nALL ORDERS READY!\n');
