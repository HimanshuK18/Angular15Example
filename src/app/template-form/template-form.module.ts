import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { TemplateFormComponentRoutingModule } from './template-form-routing.module';

@NgModule({
  imports: [TemplateFormComponentRoutingModule, FormsModule],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule {}
