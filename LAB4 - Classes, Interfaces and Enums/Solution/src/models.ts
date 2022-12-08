


export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}


export class Task {
  private _id: number;
  title: string;
  description: string;
  date: Date;
  assignedTo: Person;
  data?: any;

  priority: Priority = Priority.Normal


  constructor(id: number, title: string, description: string, date: Date, assignedTo: Person, data?: any) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.assignedTo =assignedTo;
    this.data = data
  }

  get id() {
    return this._id
  }

  public update(title: string, description: string, date: Date, assignedTo: Person , data?: any) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.assignedTo =assignedTo;
    this.data = data
  }


}

export class ImportantTask extends Task {

  constructor(id: number, title: string, description: string, date: Date, assignedTo: Person, data?: any) {
    super(id, title, description, date, assignedTo, data )
    this.priority = Priority.High
  }
}

export enum Priority {
  Low = "low",
  Normal = "normal",
  High = "normal"
}

