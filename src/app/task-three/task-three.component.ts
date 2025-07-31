import { Component } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent {
  isStandardDisplay = true;
  clickList = [];

  toggleParagraphDisplay(){
    this.isStandardDisplay = !this.isStandardDisplay;
    this.clickList.push(new Date());
  }
}
