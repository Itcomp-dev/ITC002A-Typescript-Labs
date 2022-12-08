import { Task } from "./models"


interface Crud<T> {
    add(value: T): T;
    update(value: T): T;
    delete(id: number): boolean;
}



class TaskManager<T extends Task> implements Crud<T> {

    private _tasks: T[] = []

    add(value: T): T { 
        this._tasks.push(value)
        return value
    }

    update(value: T): T {
        let i = this._tasks.findIndex(t => t.id == value.id)
        if (i >= 0) {
            this.tasks[i].update(value.title, value.description, value.date, value.assignedTo, value.data)
        }
        return this.tasks[i]
    }

    delete(id: number): boolean {
        let i = this._tasks.findIndex(t => t.id == id)
        if (i >= 0) {
            this.tasks.splice(i, 1)
        }
        return false
    }

    get tasks() {
        return this._tasks
    }

}







export default TaskManager;