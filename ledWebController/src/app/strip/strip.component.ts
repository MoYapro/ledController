import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {LedStripStatus} from '../model/led-strip-status';
@Component({
  selector: 'app-strip',
  templateUrl: './strip.component.html',
  styleUrls: ['./strip.component.css']
})
export class StripComponent implements OnInit {

  constructor() {
  }

  @Input() status: LedStripStatus;

  @Output() valueChange = new EventEmitter();

  ngOnInit(): void {
  }

  addLed(): void { // You can give any function name
    this.valueChange.emit();
  }
}
