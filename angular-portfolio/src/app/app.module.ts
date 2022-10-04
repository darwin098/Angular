import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelevantLinksComponent } from './relevant-links/relevant-links.component';
import { SelfIntroComponent } from './self-intro/self-intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { IndivSkillSectionComponent } from './indiv-skill-section/indiv-skill-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LottiePlayerComponent } from './lottie-player/lottie-player.component';
import { NavRelevantLinksComponent } from './nav-relevant-links/nav-relevant-links.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    RelevantLinksComponent,
    SelfIntroComponent,
    SkillsComponent,
    ProficiencyComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
    IndivSkillSectionComponent,
    LottiePlayerComponent,
    NavRelevantLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
