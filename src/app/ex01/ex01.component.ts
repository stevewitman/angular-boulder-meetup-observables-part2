import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.scss']
})
export class Ex01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    console.log('%cof( 1, 2, 3 ) emits ...', 'background: #ADFF2F66');
    of(1, 2, 3)
      .subscribe(console.log);

    console.log();
    console.log("%cof( 'Some string' ) emits ...", 'background: #ADFF2F66');
    of('Some string')
      .subscribe(console.log);

    console.log();
    console.log('%cof( [10, 20, 30] ) emits ...', 'background: #ADFF2F66');
    of([10, 20, 30])
      .subscribe(console.log);

    console.log();
    console.log('%cfrom( [12, 24, 36] ) emits ...', 'background: #ADFF2F66');
    from([12, 24, 36])
      .subscribe(console.log);

    console.log();
    console.log("%cfrom( 'RxJS' ) emits ...", 'background: #ADFF2F66');
    from('RxJS')
      .subscribe(console.log);

    console.log();
  }

}
