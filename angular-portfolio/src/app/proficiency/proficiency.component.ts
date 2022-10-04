import { Component, OnInit } from '@angular/core';

import { proficiency } from '../data';
import { ProficiencyAnim } from '../data';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css'],
})
export class ProficiencyComponent implements OnInit {
  proficiency = proficiency;
  options = ProficiencyAnim;

  constructor() {}

  ngOnInit(): void {}
}
