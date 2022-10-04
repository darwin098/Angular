import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

import { Skills } from '../skills';

@Component({
  selector: 'app-indiv-skill-section',
  templateUrl: './indiv-skill-section.component.html',
  styleUrls: ['./indiv-skill-section.component.css'],
})
export class IndivSkillSectionComponent implements OnInit {
  @Input() title: string = ``;
  @Input() technologies: Skills['technologies'] = [];
  @Input() sellingPoints: string[] = [];
  @Input() options: AnimationOptions = {
    path: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
