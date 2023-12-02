class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Return the top element without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Remove all elements from the stack
    clear() {
      this.items = [];
    }
  }
  
//   // Example usage:
//   const newStack = new Stack();
//   newStack.push(1);
//   newStack.push(2);
//   newStack.push(3);
  
//   console.log("Stack:", newStack.items);
//   console.log("Pop:", newStack.pop());
//   console.log("Peek:", newStack.peek());
//   console.log("Is Empty:", newStack.isEmpty());
//   console.log("Size:", newStack.size());
//   newStack.clear();
//   console.log("Stack after clear:", newStack.items);
  