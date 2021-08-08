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

  ngOnInit() {}

}
