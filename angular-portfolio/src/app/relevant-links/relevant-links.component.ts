import { Component, OnInit } from '@angular/core';

import { RelevantLinks } from '../data';

@Component({
  selector: 'app-relevant-links',
  templateUrl: './relevant-links.component.html',
  styleUrls: ['./relevant-links.component.css'],
})
export class RelevantLinksComponent implements OnInit {
  RelevantLinks = RelevantLinks;

  constructor() {}

  ngOnInit(): void {}
}
