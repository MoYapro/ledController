import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from './net/data.service';
import {LedStripStatus} from './model/led-strip-status';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ledWebController';
  data: LedStripStatus;
  private dataSubscriber: Subscription;

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataSubscriber = this.dataService.getStatus()
      .subscribe(data => {
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    // this.dataSubscriber.unsubscribe();
  }


}
