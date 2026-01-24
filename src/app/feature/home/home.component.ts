import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { PopularCarsComponent } from '../popular-cars/popular-cars.component';
import { HowItWorkComponent } from "../how-it-work/how-it-work.component";
import { WhyChooseComponent } from '../why-choose/why-choose.component';

@Component({
  selector: 'app-home',
  imports: [LandingPageComponent, PopularCarsComponent, HowItWorkComponent, WhyChooseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
