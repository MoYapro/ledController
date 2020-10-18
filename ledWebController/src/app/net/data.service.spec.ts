import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {LedStripStatus} from '../model/led-strip-status';

function count(iterator: Iterable<any>) {
  let count = 0;
  for(const x of iterator) {
    count++;
  }
  return count;
}

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
      expect(count(ledStatus.leds)).toEqual(ledStatus.size);
      done();
    });
  });
});
