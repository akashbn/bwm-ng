import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() location: string;
  isPositioerror: Boolean = false;

  lat: number;
  lng: number;

  constructor(private mapservice: MapService,
              private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  mapReadyHandler() {
      this.mapservice.getGeoLocation(this.location).subscribe(
        (coordinates) => {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;

            this.ref.detectChanges();
        },
          () => {
            this.isPositioerror = true;
          }
        );
  }
}
