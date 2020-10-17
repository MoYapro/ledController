import {Led} from './led';

export interface LedStripStatus {
  leds: Array<Led>;
  active: boolean;
  size: number;
}
