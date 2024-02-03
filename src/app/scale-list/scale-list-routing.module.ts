import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleListComponent } from './scale-list.component';

const routes: Routes = [
    {path: '', component: ScaleListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleListRoutingModule { }
