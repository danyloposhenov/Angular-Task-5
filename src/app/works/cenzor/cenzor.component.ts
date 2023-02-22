import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public container = 'container';
  public title = 'title';
  public titleWords = 'title-words';
  public text = 'text';
  public tHolder = 'word here..';
  public btnAdd = 'btnAdd';
  public btnReset = 'btnReset';
  public field = 'field';
  public btnCenzor = 'btnCenzor';
  public cenzor = '';
  public inputText = '';
  public tBorder = false;
  public fBorder = false;
  public fHolder = 'text here..'
  public arrTitle = 'java,tottenham';
  public arr = ['java', 'tottenham'];
  public arrArea!: any[];

  addWords(): void {
    if (this.inputText == '') {
      this.tBorder = true;
      this.tHolder = 'Please write a word!';
      return
    }
    this.tBorder = false;
    this.tHolder = 'word here..';
    if (this.arr.length != 0) {
      let text = ',' + this.inputText.toLowerCase();
      this.arr.push(text);
      this.arrTitle += text;
    } else {
      let text = this.inputText.toLowerCase();
      this.arr.push(text);
      this.arrTitle += text;
    }
    this.arr.push(this.inputText);
    this.inputText = '';
  }
  resetWords() {
    this.arrTitle = '';
    this.arr = [];
  }
  cenzorWords() {
    if (this.cenzor == '') {
      this.fBorder = true;
      this.fHolder = 'Please write a text!'
      return
    }
    this.fBorder = false;
    this.arrArea = this.cenzor.split(' ');
    for (let word of this.arr) {
      if (this.arrArea.includes(word)) {
        this.arrArea = this.arrArea.map(item => (item == word) ? item.split('').map((icon: any) => icon = '*').join('') : item);
      }
    }
    this.cenzor = `${this.arrArea.join(' ')}`;
  }
}

