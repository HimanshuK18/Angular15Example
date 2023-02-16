import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { TemplateFormComponentRoutingModule } from './template-form-routing.module';
import { ListProductsComponent } from '../asyncpipeexample/add.product.component';
import { HttpClientModule } from '@angular/common/http';
import { CatService } from '../../service/catService';
@NgModule({
  imports: [TemplateFormComponentRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    TemplateFormComponent, ListProductsComponent
  ],
  providers: [CatService],
  exports: [HttpClientModule]
})
export class TemplateFormModule {}
