class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
    }
  
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements.shift();
    }
  
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elements[0];
    }
  
    isEmpty() {
        return this.elements.length === 0;
    }
  
    size() {
        return this.elements.length;
    }
    
}
export default Queue;

