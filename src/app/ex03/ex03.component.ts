import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';

import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.scss'],
})
export class Ex03Component implements OnInit {
  active: string = '';
  val: any;

  constructor(
    private highlightService: HighlightService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.clear();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  pipeTap1() {
    this.val = null;
    this.active = 'pipeTap1';
    // console.clear();
    this.logInConsole('Example 3');
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(val => console.log('DATA:', val)),
      )
      .subscribe();
  }

  pipeTap2() {
    this.active = 'pipeTap2';
    console.clear();
    // this.logInConsole('Example 3b');
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(val => this.val = val)
      )
      .subscribe();
  }

  pipeTapMap3() {
    this.active = 'pipeTapMap3';
    console.clear();
    // this.logInConsole('Example 3c');
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: any) =>
          res.map((data: any) => {
            return {
              id: data.id,
              name: data.name,
            };
          })
        ),
        tap(val => this.val = val)
      )
      .subscribe();
  }

  logInConsole(val: string) {
    console.log(
      `%c ${val} emits ... `,
      'background: #ADFF2F66; font-weight: bold; border-radius: 3px;'
    );
  }
}
