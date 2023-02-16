import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgContentComponent } from './ng-content.component';
import { HttpClientModule } from '@angular/common/http';
import { NgContentComponentRoutingModule } from './ng-content.routing.module';

@NgModule({
  imports: [FormsModule, HttpClientModule, NgContentComponentRoutingModule],
  declarations: [
    NgContentComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [HttpClientModule, NgContentComponent]
})
export class NgContentModule {}
