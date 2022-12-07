

namespace Models {

  export type Tasks = Array<Task>
  // or type Tasks = Task[]

  export interface Person {
    id: number;
    firstName: string;
    lastName: string;
  }

  export interface Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    assignedTo: Person;
    data?: any
  }

}



