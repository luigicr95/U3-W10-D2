import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tasks = [
    {
      name: 'laundry',
      check: '',
    },
    {
      name: 'dusting',
      check: '',
    },
    {
      name: 'dish washing',
      check: '',
    },
    {
      name: 'waxing',
      check: '',
    },
    {
      name: 'grocery shopping',
      check: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }

  checkTask(i: number) {
    this.tasks[i].check = this.tasks[i].check === 'check' ? '' : 'check';
  }
}
