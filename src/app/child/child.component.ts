import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() public data:any; 

  constructor() { }

  ngOnInit(): void {
  }

  public show(){
    console.log('Child rendered');
  }
}
