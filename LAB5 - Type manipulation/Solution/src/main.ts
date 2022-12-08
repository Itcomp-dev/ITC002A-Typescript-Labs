import tasks from "./data"



let printTasks = () : void => {
  tasks.forEach(task=>{
    console.log("Task:", task.id, "assigned To:", task.assignedTo.firstName, task.assignedTo.lastName, "due date:", task.date)
  })
}

printTasks()