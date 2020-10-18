import {LedStripStatus} from '../model/led-strip-status';
import {Transition} from './transition';

export class LedProgramm {
  private startStatus: LedStripStatus;
  private readonly transitions: Iterable<Transition>;
  private currentFrame: number;

  constructor(startStatus: LedStripStatus, transitions: Iterable<Transition>) {
    this.transitions = transitions;
    this.startStatus = startStatus;
    this.currentFrame = 0;
  }

  nextFrame(): LedStripStatus {
    this.currentFrame++;
    if (1 === this.currentFrame) {
      return this.startStatus;
    }
    return this.transitions[0].endStatus

  }
}
