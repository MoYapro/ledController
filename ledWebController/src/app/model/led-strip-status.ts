import {Led} from './led';

export interface LedStripStatus {
  leds: Iterable<Led>;
  active: boolean;
  size: number;
}
