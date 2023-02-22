import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  public login!: string;
  public password!: string;
  public email!: string;
  public persons: any = [];
  public editStatus = false;
  public modal = false;
  public editIndex!: number;
  constructor() { }
  addUser(): void {
    let person = {
      login: this.login,
      password: this.password,
      email: this.email
    }
    this.persons.push(person);
    this.login = '';
    this.password = '';
    this.email = '';
  }

  delete(index: number): void {
    this.persons.splice(index, 1);
  }
  edit(index: number): void {
    this.login = this.persons[index].login;
    this.password = this.persons[index].password;
    this.email = this.persons[index].email;
    this.editStatus = true;
    this.modal = true;
    this.editIndex = index;
  }
  editUser(): void {
    this.persons[this.editIndex].login = this.login;
    this.persons[this.editIndex].password = this.password;
    this.persons[this.editIndex].email = this.email;
    this.editStatus = false;
    this.modal = false;
    this.login = '';
    this.password = '';
    this.email = '';
  }
}
