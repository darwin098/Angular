import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-player',
  templateUrl: './lottie-player.component.html',
  styleUrls: ['./lottie-player.component.css'],
})
export class LottiePlayerComponent implements OnInit {
  @Input() options: AnimationOptions = {
    loop: true,
    autoplay: true,
    path: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
