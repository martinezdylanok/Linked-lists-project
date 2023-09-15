import node from "./node.js";

export default class linkedList {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   append(value) {
      const newNode = new node(value);
      if (!this.head) {
         this.head = newNode;
      } else {
         if (this.head.nextNode === null) {
            this.head.nextNode = newNode;
         } else {
            this.head.nextNode.nextNode = newNode;
         }
      }
      this.size += 1;
   }

   prepend(value) {
      const newNode = new node(value);
      if (!this.head) {
         this.head = newNode;
      } else {
         newNode.nextNode = this.head;
         this.head = newNode;
      }
      this.size += 1;
   }

   size() {
      return this.size;
   }

   head() {
      return this.head;
   }

   tail() {
      let currentNode = this.head;
      while (currentNode) {
         if (currentNode.nextNode === null) {
            return currentNode;
         } else {
            currentNode = currentNode.nextNode;
         }
      }
      return null;
   }

   at(index) {
      if (!this.head) {
         return null;
      } else {
         let currentNode = this.head;
         for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
            if (!currentNode) {
               return null;
            }
         }
         return currentNode;
      }
   }

   popLast() {
      if (!this.head) {
         return null;
      } else if (!this.head.nextNode) {
         this.head = null;
      } else {
         let currentNode = this.head;
         let prevNode = null;
         while (currentNode.nextNode !== null) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
         }
         prevNode.nextNode = null;
      }
      this.size -= 1;
   }

   containsValue(value) {
      let currentNode = this.head;
      while (currentNode) {
         if (currentNode.value === value) {
            return true;
         }
         currentNode = currentNode.nextNode;
      }
      return false;
   }

   findValue(value) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
         if (currentNode.value === value) {
            return index;
         }
         currentNode = currentNode.nextNode;
         index += 1;
      }
      return null;
   }

   toString() {
      let result = "";
      let currentNode = this.head;
      while (currentNode) {
         result += `(${currentNode.value}) -> `;
         currentNode = currentNode.nextNode;
      }
      result += "null";
      console.log(result);
   }

   insertAt(value, index) {
      if (index < 0 || index > this.size) {
         return null;
      }

      const newNode = new node(value);

      if (index === 0) {
         newNode.nextNode = this.head;
         this.head = newNode;
      } else {
         let currentNode = this.head;
         let prevNode = null;

         for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
         }

         newNode.nextNode = currentNode;
         prevNode.nextNode = newNode;
      }

      this.size += 1;
   }

   removeAt(index) {
      if (index < 0 || index > this.size) {
         return null;
      }

      if (index === 0) {
         this.head = this.head.nextNode;
      } else {
         let currentNode = this.head;
         let prevNode = null;
         for (let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = prevNode.nextNode;
         }
         prevNode.nextNode = currentNode.nextNode;
      }

      this.size -= 1;
   }
}
