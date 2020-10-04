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
  data = {
    active: true,
    size: 3,
    leds: [
      {active: true, color: 5},
      {active: false, color: 5},
      {active: true, color: 5}
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

  add($event: any): void {
    this.data.leds.push({active: true, color: 3});
  }
}
