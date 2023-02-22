import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  public name!: string;
  public taskName!: string;
  public count = 6;

  addList(): void {
    this.taskName = this.name;
    this.name = '';
    this.count++;
  }

  checkStatus(status: boolean): void {
    this.count--;
  }
}
