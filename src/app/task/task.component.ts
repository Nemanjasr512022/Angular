import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTaskComponent } from '../user-task/user-task.component';
import { Task } from 'zone.js/lib/zone-impl';
import { task } from './task.model';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: task | undefined;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task?.id);
  }
}
