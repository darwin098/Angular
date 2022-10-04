import { Component, OnInit } from '@angular/core';

import { Projects } from '../data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  Projects = Projects;

  constructor() {}

  ngOnInit(): void {}
}
