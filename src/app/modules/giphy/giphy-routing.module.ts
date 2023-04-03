import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyHomeComponent } from './pages';

const routes: Routes = [
  { path: "", component: GiphyHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphyRoutingModule { }
