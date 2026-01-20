import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { PopularCarsComponent } from '../popular-cars/popular-cars.component';

@Component({
  selector: 'app-home',
  imports: [LandingPageComponent, PopularCarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
