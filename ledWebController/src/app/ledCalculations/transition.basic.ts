import {LedStripStatus} from '../model/led-strip-status';
import {Transition} from './transition';

export class TransitionBasic implements Transition {
  duration: number;
  endStatus: LedStripStatus;

  constructor(endStatus: LedStripStatus, duration: number) {
    this.endStatus = endStatus;
    this.duration = duration;
  }


}
