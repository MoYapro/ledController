import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {LedStripStatus} from '../model/led-strip-status';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should produce data', done => {
    service.getStatus().subscribe(ledStatus => {
      expect(ledStatus.active).toBeTrue();
      expect(ledStatus.size).toEqual(3);
      done();
    });
  });

  it('should produce data for each led', done => {
    service.getStatus().subscribe(ledStatus => {
      expect(ledStatus.leds.length).toEqual(ledStatus.size);
      done();
    });
  });
});
