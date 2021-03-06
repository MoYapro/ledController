import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import * as socketIo from 'socket.io-client';
import {of} from 'rxjs';
import {Socket} from '../shared/interfaces';
import {LedStripStatus} from '../model/led-strip-status';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private socket: Socket;
  private observer: Observer<any>;
  data: LedStripStatus = {
    active: true,
    size: 3,
    leds: [
      {active: true, color: {name: 'red', red: 255, green: 0, blue: 0}},
      {active: true, color: {name: 'green', red: 0, green: 255, blue: 0}},
      {active: true, color: {name: 'blue', red: 0, green: 0, blue: 255}}
    ]
  };

  getStatus(): Observable<LedStripStatus> {
    // this.socket = socketIo('http://localhost:8080');
    //
    // this.socket.on('data', (res) => {
    //   this.observer.next(res.data);
    // });
    console.log('create data of', this.data);
    return of(
      this.data
    );
  }

  createObservable(): Observable<number> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }

  private handleError(error): Observable<any> {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

  updateLeds(newStatus: LedStripStatus) {
    this.data.active = newStatus.active;
    this.data.leds = newStatus.leds;
    this.data.size = newStatus.size;
  }

}
