import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, from, Observable, throwError, EMPTY, fromEvent, interval, zip, defer } from 'rxjs';
import { catchError, filter, find, map, pluck, reduce, skipWhile, switchMap, switchMapTo, take, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  // Example 1: of() and from() Creation Operators




  // EXAMPLE 2:



  // EXAMPLE 3: 

    // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    //   tap(val => this.greenLog('BEFORE MAP', val )),
    //   map((res:any) =>
    //       res.map((data:any) => {
    //         return {
    //           id: data.id,
    //           name: data.name
    //         }
    //       }
    //     )),
    //   tap(val => this.greenLog('BEFORE MAP', val )),
    // ).subscribe();

  // Example 2: ajax() and pluck()

    // ajax('https://jsonplaceholder.typicode.com/users')
    //   .pipe(
    //     tap(val => console.log('%cEXAMPLE 1: (BEFORE)', 'background: #fcca74', val )),
    //     tap(val => {this.before = val.response}),
    //     pluck('response'),
    //     map((res:any) =>
    //       res.map((data:any) => {
    //         return {
    //           id: data.id,
    //           name: data.name
    //         }
    //       }
    //     )),
    //     tap(val => {this.after = val}),
    //   )
    //   .subscribe(val => console.log('%cEXAMPLE 1: (AFTER)', 'background: #fcca74', val ));










  }

  greenLog(caption: string, val:any): void {
    console.log(`%c${caption}`, 'background: #ADFF2F66', val);
  }


}
