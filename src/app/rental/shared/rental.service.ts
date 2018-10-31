import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../shared/rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] =
  [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '30/10/2018'
     },
     {
      id: '2',
      title: 'Central Apartment 2',
      city: 'Bangalore',
      street: 'Times Square',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: true,
      createdAt: '30/10/2018'
     },
     {
      id: '3',
      title: 'Central Apartment 3',
      city: 'Shikaripure',
      street: 'Times Square',
      category: 'condo',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: true,
      createdAt: '30/10/2018'
     },
     {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Mangalore',
      street: 'Times Square',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very Nice Apartment',
      dailyRate: 34,
      shared: true,
      createdAt: '30/10/2018'
     }

  ];
public getRentalById(rentalId: string): Observable<Rental> {
  return new Observable<Rental>((observer) => {
    const foundRental = this.rentals.find((rental) => {
      return rental.id === rentalId;
    });

    observer.next(foundRental);
  });
}

public getRentals(): Observable<Rental[]> {
  return new Observable<Rental[]>((observer) => {
        setTimeout(() => {
          observer.next(this.rentals);
        }, 2000);
      }
);


}
}
