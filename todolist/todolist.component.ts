import { Component } from '@angular/core';

@Component ({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent {
 tasks: string[] = [];

 task: string;

 addTask() {
     this.tasks.push(this.task);
 }
 deleteTask(taskIndex: number) {
     this.tasks = this.tasks.filter((t, index) => index !== taskIndex);
 }
}