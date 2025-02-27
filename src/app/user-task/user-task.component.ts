import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { addTask } from '../task/task.model';
import { CardComponent } from '../shared/card/card.component';
import { TaskService } from './user-task.service';
@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, CardComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTaskComponent {
  @Input() name?: string;
  @Input({ required: true }) id!: string;
  public clicked: boolean = false;
  constructor(private taskService: TaskService) {}

  onClick() {
    this.clicked = !this.clicked;
  }

  get SelectedUserTasks() {
    return this.taskService.getUserTasks(this.id);
  }
  onAddTask(taskData: addTask) {
    this.taskService.addTask(taskData, this.id);
    this.clicked = false;
  }
  onCompleteTask(id: string) {
    this.taskService.removeTask;
  }
}
