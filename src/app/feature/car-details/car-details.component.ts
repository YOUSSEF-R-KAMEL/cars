import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarsService } from '../../shared/services/cars/cars.service';
import { ICarDetails } from '../../shared/models/ICar';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit {
  currentId: number = 0;
  currentCar: ICarDetails | null = null;
  route = inject(ActivatedRoute);
  carsService = inject(CarsService);
  ngOnInit(): void {
    this.currentId = this.route.snapshot.params['id'];
    this.getCarById();
  }

  getCarById(): void {
    this.carsService.getCarById(this.currentId).subscribe(res => {
      this.currentCar = res.Car;
      console.log(this.currentCar)
    });
  }
}
