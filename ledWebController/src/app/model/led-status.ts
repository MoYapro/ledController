import {Led} from './led';

export interface LedStatus {
  leds: Array<Led>;
  active: boolean;
  size: number;
}
