import { AnimationOptions } from 'ngx-lottie';

export interface Skills {
  title: string;
  technologies: { name: string; icon: string }[];
  sellingPoints: string[];
  skillAnim: AnimationOptions;
}
