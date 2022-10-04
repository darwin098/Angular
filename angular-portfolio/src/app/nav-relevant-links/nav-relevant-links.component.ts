import { Component, OnInit } from '@angular/core';

import { RelevantLinks } from '../data';

@Component({
  selector: 'app-nav-relevant-links',
  templateUrl: './nav-relevant-links.component.html',
  styleUrls: ['./nav-relevant-links.component.css'],
})
export class NavRelevantLinksComponent implements OnInit {
  RelevantLinks = RelevantLinks;

  constructor() {}

  ngOnInit(): void {}
}
