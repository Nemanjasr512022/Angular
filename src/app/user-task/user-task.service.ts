import { Injectable } from '@angular/core';
import { addTask, task } from '../task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.dummyTasks.filter((task) => userId == task.userId);
  }
  addTask(taskData: addTask, userId: string) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
    this.saveTask();
  }
  removeTask(id?: string) {
    console.log(id);
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}
