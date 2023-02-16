import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form.component';
import { CommonModule } from '@angular/common'

const routes: Routes = [
  {
    path: '',
    component: TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [CommonModule]
})
export class TemplateFormComponentRoutingModule {}
