import {Component, Input, OnInit} from '@angular/core';
import {Led} from '../model/led';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {
  @Input() led: Led;

  constructor() { }

  ngOnInit(): void {
  }

}
