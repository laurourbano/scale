import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaleRegisterComponent } from './scale-register.component';

const routes: Routes = [{ path: '', component: ScaleRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleRegisterRoutingModule { }
