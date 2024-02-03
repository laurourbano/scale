import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesRegisterComponent } from './employees-register.component';

const routes: Routes = [{ path: '', component: EmployeesRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRegisterRoutingModule {}
