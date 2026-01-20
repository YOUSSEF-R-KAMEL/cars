import { Component } from '@angular/core';
import { LandingPageComponent } from "./feature/landing-page/landing-page.component";
import { NavComponent } from "./feature/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [LandingPageComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cars';
}
