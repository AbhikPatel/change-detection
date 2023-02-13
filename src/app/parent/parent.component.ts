import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data = {counter:1}

  public show(){
    console.log('Parent rendered');
    return 'Parent'
  }

  public onAdd(){
    this.data.counter++;
    // this.data = {counter: ++this.data.counter}
  }
}
