import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars/cars.service';
import { ICar } from '../../shared/models/ICar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-popular-cars',
  imports: [CommonModule, RouterLink],
  templateUrl: './popular-cars.component.html',
  styleUrl: './popular-cars.component.scss',
})
export class PopularCarsComponent implements OnInit {
  CarsService = inject(CarsService);
  cars: ICar[] = [];
  imagePaths: string[] = [
    'images/cars/car_01.png',
    'images/cars/car_02.png',
    'images/cars/car_03.png',
    'images/cars/car_04.png',
  ];

  ngOnInit(): void {
    this.getPopularCars();
  }

  getPopularCars(): void {
    this.CarsService.getAllCars().subscribe((res) => {
      this.cars = res.cars
        .map((car, index) => ({
          ...car,
          image: this.imagePaths[index % this.imagePaths.length],
          rating: Math.floor(Math.random() * 5) + 1,
          reviews: Math.floor(Math.random() * 500) + 1,
        }))
        .slice(0, 4);
      console.log(this.cars);
    });
  }
}
