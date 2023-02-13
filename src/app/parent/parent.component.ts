import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  public getData:Subject<any>
  constructor() { 
    this.getData = new Subject();
  }

  ngOnInit(): void {
    this.getData.next(this.data)
  }

  public data = [
    {
      id:1,
      name:"walk"
    },
    {
      id:2,
      name:"workout"
    },
    {
      id:3,
      name:"Read"
    }
  ]

  public show(){
    console.log('Parent rendered');
    return 'Parent'
  }

  public onChange(){
    console.log('change text');
  }
}
