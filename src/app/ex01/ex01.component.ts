import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { from, of } from 'rxjs';

import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.scss'],
})
export class Ex01Component implements OnInit, AfterViewChecked {
  active: string = '';

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {
    console.clear();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  of1() {
    this.active = 'of1';
    console.clear();
    this.logInConsole('of(1, 2, 3)');
    of(1, 2, 3).subscribe(console.log);
  }

  of2() {
    this.active = 'of2';
    console.clear();
    this.logInConsole("of('Some string')");
    of('Some string').subscribe(console.log);
  }
  of3() {
    this.active = 'of3';
    console.clear();
    this.logInConsole('of([10, 20, 30])');
    of([10, 20, 30]).subscribe(console.log);
  }
  from1() {
    this.active = 'from1';
    console.clear();
    this.logInConsole('from([12, 24, 36])');
    from([12, 24, 36]).subscribe(console.log);
  }
  from2() {
    this.active = 'from2';
    console.clear();
    this.logInConsole("from('RxJS')");
    from('RxJS').subscribe(console.log);
  }

  logInConsole(val: string) {
    console.log(
      `%c ${val} emits ... `,
      'background: #ADFF2F66; font-weight: bold; border-radius: 3px;'
    );
  }
}
