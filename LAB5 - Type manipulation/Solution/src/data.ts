import { ID, Person, Task, Tasks } from "./models"


let me = {
    id: 1,
    firstName: "Typescript",
    lastName: "Developer"
}

let task: Task = {
    id: 1,
    title: "Fix bugs",
    description: "Fix all issues in the code, and pass tests",
    date: new Date(),
    assignedTo: me as Person //or <Person> me
}


const tasks: Array<Task> = [task]



export function addTask(id: ID, title: string, description: string, date: Date, assignedTo: Person = me, data: any = {}): typeof tasks[number] {
    let task = { id, title, description, date, assignedTo, data }
    return task
}

export function updateTask(id: ID, title: string, description: string, date: Date, assignedTo: Person = me, data: any = {}): typeof tasks[number] {
    let i = tasks.findIndex(t => t.id == id)
    if (i >= 0) {
        tasks[i] = { id, title, description, date, assignedTo, data }
    }
    return task!
}

export function deleteTask(id: ID): boolean {
    let i = tasks.findIndex(t => t.id == id)
    if (i >= 0) {
        tasks.splice(i, 1)
    }
    return false
}



export default tasks;