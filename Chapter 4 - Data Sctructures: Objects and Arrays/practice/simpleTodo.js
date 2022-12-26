let todoList = []

const addTodo = todo => todoList.push(todo)

const addHighPriorityTodo = todo => todoList.unshift(todo)

const getTodo = () => todoList.shift()

addTodo("Watch AWS videos")
console.log(todoList)

addHighPriorityTodo("Complete Objects and Arrays")
console.log(todoList)

addTodo("Read Clean Code")
console.log(todoList)

console.log(getTodo())
console.log(todoList)
