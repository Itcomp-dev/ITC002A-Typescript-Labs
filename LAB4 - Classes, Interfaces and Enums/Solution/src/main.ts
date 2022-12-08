import TaskManager from "./data"
import { Person, Task } from "./models"


let manager = new TaskManager()


let me = {
  id: 1,
  firstName: "Typescript",
  lastName: "Developer"
}

let task: Task = new Task(
  1,
  "Fix bugs",
  "Fix all issues in the code, and pass tests",
  new Date(),
  me as Person //or <Person> me
)

manager.add(task)



let printTasks = () : void => {
  manager.tasks.forEach(task=>{
    console.log("Task:", task.id, "assigned To:", task.assignedTo.firstName, task.assignedTo.lastName, "due date:", task.date)
  })
}

printTasks()