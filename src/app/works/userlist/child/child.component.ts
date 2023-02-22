import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() userName!: string;
  @Input()
  set add(name: string) {
    if(name) {
      let line = {
        name: name,
        check: false
      }
      this.list.push(line);
    }
  }
  get add(): any {
    return this.list
  }
  @Output() changeCount = new EventEmitter<boolean>();

  public modal = false;
  public editInput = false;
  public editText!: string;
  public indexSave!: number;
  public list = [
    {
      name: 'HTML5',
      check: true
    },
    {
      name: 'CSS3',
      check: true
    },
    {
      name: 'SCSS',
      check: false
    },
    {
      name: 'JavaScript',
      check: false
    },
    {
      name: 'JQuery',
      check: false
    },
    {
      name: 'Angular',
      check: false
    }
  ];
  public amount = this.list.length;

  edit(index: number): void {
    this.editText = this.list[index].name;
    this.indexSave = index;
    this.editInput = true;
  }

  delete(index: number): void {
    this.list.splice(index, 1);
    this.changeCount.emit(true);
  }

  save(): void {
    this.list[this.indexSave].name = this.editText;
    this.editText = '';
    this.editInput = false;
  }
}
