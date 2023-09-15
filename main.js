import linkedList from "./linkedList.js";

const myList = new linkedList();
myList.append("Append 1");
myList.append("Append 2");
myList.append("Append 3");
myList.prepend("Prepended 1");

console.log("Size:", myList.size);
console.log("Head:", myList.head.value);
console.log("Tail:", myList.tail().value);

console.log("Node at index 2:", myList.at(2));
console.log("Contains Append 9:", myList.containsValue("Append 9"));
console.log("Index of Append 3:", myList.findValue("Append 3"));

console.log("Inserted at index 2:", myList.insertAt("Inserted node", 2));
console.log("Node at index 2:", myList.at(2));
myList.toString();

console.log("Removed at index 2:", myList.removeAt(2));
myList.toString();
