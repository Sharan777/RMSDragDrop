import { Component, VERSION } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  width: number;
  height: number;
 
  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log('width', this.width);
    console.log('height', this.height);
  }

  groups=[1,2,3,4,5,6,7,8,9,10,11]
  
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
  }
}
