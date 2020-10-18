import {TestBed} from '@angular/core/testing';

import {LedCalculatorService} from './led-calculator.service';
import {LedStripStatus} from '../model/led-strip-status';
import {LedProgramm} from './led.programm';
import {TransitionBasic} from './transition.basic';


function getStartLedStatus() {
  return {
    active: false,
    size: 3,
    leds: [
      {active: true, color: {name: 'red', red: 0, green: 0, blue: 0}},
      {active: true, color: {name: 'green', red: 0, green: 0, blue: 0}},
      {active: true, color: {name: 'blue', red: 0, green: 0, blue: 0}}
    ]
  };
}

function getEndLedStatus() {
  return {
    active: true,
    size: 3,
    leds: [
      {active: true, color: {name: 'red', red: 255, green: 0, blue: 0}},
      {active: true, color: {name: 'green', red: 0, green: 255, blue: 0}},
      {active: true, color: {name: 'blue', red: 0, green: 0, blue: 255}}
    ]
  };
}

describe('LedCalculatorService', () => {
  let service: LedCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LedCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should repeat start led status as first frame', () => {
    const startStatus: LedStripStatus = getStartLedStatus();
    const endStatus: LedStripStatus = getStartLedStatus();
    const transition = new TransitionBasic(endStatus, 5);
    const ledProgramm = new LedProgramm(startStatus, [transition]);
    service.setData(ledProgramm);
    expect(startStatus).toEqual(ledProgramm.nextFrame());
  });

  it('should repeat endStatus of first transition after first transitions duration', () => {
    const startStatus: LedStripStatus = getStartLedStatus();
    const endStatus: LedStripStatus = getEndLedStatus();
    const transition = new TransitionBasic(endStatus, 1);
    const ledProgramm = new LedProgramm(startStatus, [transition]);
    service.setData(ledProgramm);
    ledProgramm.nextFrame() // 1st frame ignored
    const finalState = ledProgramm.nextFrame(); // 2nd frame = last frame
    expect(startStatus == endStatus).toBeFalsy('start and end should differ')
    expect(endStatus).toEqual(finalState, 'status is not equal');
  });
});
