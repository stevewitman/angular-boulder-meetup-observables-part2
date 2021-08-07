import { Component, OnInit } from '@angular/core';
import { interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.scss']
})
export class Ex02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.clear();
    // console.log('%cinterval(1000) emits ...', 'background: #ADFF2F66');
    // interval(1000)
    //   .subscribe(
    //     val => console.log(val),
    //   );

    console.log();
    console.log('%ctimer(3000) emits ...', 'background: #ADFF2F66');
    timer(3000)
      .subscribe(
        
      )
  }

}
