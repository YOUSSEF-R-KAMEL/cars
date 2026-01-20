import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataResponse } from '../../models/ICar';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) { }

  getAllCars(): Observable<IDataResponse> {
    return this.http.get<IDataResponse>('cars');
  }
}
