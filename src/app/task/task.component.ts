import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../user-task/user-task.service';
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
  constructor(private taskService: TaskService) {}
  onCompleteTask() {
    this.taskService.removeTask(this.task?.id);
    this.complete.emit(this.task?.id);
  }
}
