import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {LedStripStatus} from '../model/led-strip-status';
import {Led} from '../model/led';
@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent implements OnInit {

  constructor() {
  }

  @Input() status: LedStripStatus;

  @Output() valueChange = new EventEmitter<LedStripStatus>();

  ngOnInit(): void {
  }

  /**
   * create a random number between 0 and (including) given value
   * @param max
   * @private
   */
  private random(max: number): number {
    return Math.round(Math.random() * max);
  }

  addLed(): void { // You can give any function name
    const random: Led = {active: true, color: {name: 'random', red: this.random(255), green: this.random(255), blue: this.random(255)}};
    const newLedStatus = [...this.status.leds, random].values();
    this.valueChange.emit({active: this.status.active, size: this.status.size + 1, leds: newLedStatus});
  }
}
