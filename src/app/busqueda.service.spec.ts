/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusquedaService } from './busqueda.service';

describe('BusquedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusquedaService]
    });
  });

  it('should ...', inject([BusquedaService], (service: BusquedaService) => {
    expect(service).toBeTruthy();
  }));
});
