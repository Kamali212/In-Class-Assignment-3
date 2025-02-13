// Task 5

// let orders = [
//     {id: 101, customer: "Alice", total: 300},
//     {id: 102, customer: "Bob", total: 450},
//     {id: 103, customer: "Charlie", total: 200}
// ];

// function findorders(orders, orderID){
//     return orders.find(order => order.id === orderID);
// }
// some_order = findorders(orders, 101)
// console.log(`${some_order.customer} has an order id ${some_order.id}, with a total of $${some_order.total}`);

// // Task 6 Using Object Methods

// let inventory = {
//     items: [],
//     addItem(name, quantity) {
//         this.items.push({ name, quantity});
//     },
//     removeLatestItem() {
//         this.items.pop();
//     },
//     removeFirstItem() {
//         this.items.shift();
//     }
// };

// inventory.addItem("Monitor", 16);
// inventory.addItem("Laptop", 10);
// inventory.addItem("USB", 1);
// console.log(inventory.items);
// inventory.removeLatestItem();
// console.log(inventory.items);
// inventory.removeFirstItem();
// console.log(inventory.items)

// Task 7 Using the find Method 

// let employees = [
//     { name: "Alice", position: "Developer", salary: 70000},
// ];

// function findEmployee(employees, name) {
//     return employees.find(employee => employee.name === name);
// }
// console.log(findEmployee(employees, "Alice"));

// Task 8 

let ordersA = [{id: 1, customer: "Alice"}, {id: 2, customer: "Bob"}];
let ordersB = [{id: 3, customer: "Charlie"}, {id: 4, customer: "David"}];

function combineOrders(order1, order2) {
    return [...order1, ...order2]
}

console.log(combineOrders(ordersA, ordersB));
