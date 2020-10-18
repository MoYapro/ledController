import {LedStripStatus} from '../model/led-strip-status';

export interface Transition {
  endStatus: LedStripStatus,
  duration: number

}
