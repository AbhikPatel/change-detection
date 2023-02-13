import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() public data:any; 

  constructor(
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  public show(){
    console.log('Children rendered');
    return 'Counter: ' + this.data.counter
  }
}
