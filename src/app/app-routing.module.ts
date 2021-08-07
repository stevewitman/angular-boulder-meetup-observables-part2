import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';

const routes: Routes = [
  { path: 'example-1', component: Ex01Component },
  { path: 'example-2', component: Ex02Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
