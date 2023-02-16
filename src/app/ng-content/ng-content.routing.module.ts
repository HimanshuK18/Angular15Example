import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentComponent } from './/ng-content.component';
import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    component: NgContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [CommonModule]
})
export class NgContentComponentRoutingModule {}
