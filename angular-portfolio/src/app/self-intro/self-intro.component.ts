import { Component, OnInit } from '@angular/core';

import { Name } from '../data';
import { SelfIntro } from '../data';
import { SelfIntroAnim } from '../data';

@Component({
  selector: 'app-self-intro',
  templateUrl: './self-intro.component.html',
  styleUrls: ['./self-intro.component.css'],
})
export class SelfIntroComponent implements OnInit {
  Name = Name;
  SelfIntro = SelfIntro;
  options = SelfIntroAnim;

  constructor() {}

  ngOnInit(): void {}
}
