import {Led} from './led';

export interface LedStripStatus {
  leds: IterableIterator<Led>;
  active: boolean;
  size: number;
}
