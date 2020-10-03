import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import * as socketIo from 'socket.io-client';
import {of} from 'rxjs';
import {Socket} from '../shared/interfaces';
import {LedStatus} from '../model/led-status';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  socket: Socket;
  observer: Observer<any>;

  getStatus(): Observable<LedStatus> {
    // this.socket = socketIo('http://localhost:8080');
    //
    // this.socket.on('data', (res) => {
    //   this.observer.next(res.data);
    // });

    return of(
      {
        active: true,
        size: 3,
        leds: [
          {active: true, color: 5},
          {active: false, color: 5},
          {active: true, color: 5}
        ]
      }
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

}