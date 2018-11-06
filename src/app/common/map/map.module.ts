import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

import { MapService } from './map.service';
//''AIzaSyBn52Rd2pXulySsOBDErk9r2B_Fm82LCv''
@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'
  })
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule { }
