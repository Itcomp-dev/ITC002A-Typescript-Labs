


export type ID = number | string

export type Tasks = Array<Task>
// or type Tasks = Task[]

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Task {
  id: ID;
  title: string;
  description: string;
  date: Date;
  assignedTo: Person;
  data?: any
}


export enum Priority {
  Low = "low",
  Normal ="normal",
  High = "high"
}


export type ImportantTask = Task & { priority: Priority.High }
export type NormalTask = Task & { priority: Priority.Normal }
export type UnimportantTask = Omit<Task, "assignedTo"> & { priority: Priority.Low }

export type TaskWithPriority = ImportantTask | NormalTask | UnimportantTask

var notImportant : UnimportantTask = {
  id: 1,
  title: "string",
  description: "string",
  date: new Date(),
  priority: Priority.Low
}