export class Todo {
  id:number;
  todoName:string;
  isActive:boolean;


  constructor(userId: number, id: number, todoName: string, isActive: boolean) {

    this.id = id;
    this.todoName = todoName;
    this.isActive = isActive;
  }
}
