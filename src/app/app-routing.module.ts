import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex04Component } from './ex04/ex04.component';
import { Ex05Component } from './ex05/ex05.component';

const routes: Routes = [
  { path: 'example-1', component: Ex01Component },
  { path: 'example-2', component: Ex02Component },
  { path: 'example-3', component: Ex03Component },
  { path: 'example-4', component: Ex04Component },
  { path: 'example-5', component: Ex05Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
