import { Person, Task, Tasks } from "@models"


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


const tasks: Tasks = [task]



export function addTask(id: number, title: string, description: string, date: Date, assignedTo: Person = me, data: any = {}): Task {
    let task = { id, title, description, date, assignedTo, data }
    return task
}

export function updateTask(id: number, title: string, description: string, date: Date, assignedTo: Person = me, data: any = {}): Task {
    let i = tasks.findIndex(t => t.id == id)
    if (i >= 0) {
        tasks[i] = { id, title, description, date, assignedTo, data }
    }
    return task!
}

export function deleteTask(id: number): boolean {
    let i = tasks.findIndex(t => t.id == id)
    if (i >= 0) {
        tasks.splice(i, 1)
    }
    return false
}



export default tasks;