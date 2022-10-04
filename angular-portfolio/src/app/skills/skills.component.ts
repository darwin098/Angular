import { Component, OnInit } from '@angular/core';

import { ShortIntro } from '../data';
import { skills } from '../data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  ShortIntro = ShortIntro;
  skills = skills;

  constructor() {}

  ngOnInit(): void {}
}
