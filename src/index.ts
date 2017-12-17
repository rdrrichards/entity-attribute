import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelModule, InputTextModule, ButtonModule, DataTableModule, RadioButtonModule } from 'primeng/primeng';
import { AttributeComponent } from './attribute/attribute.component';
import { AttributeListComponent } from './attribute-list/attribute-list.component';

export * from './attribute/attribute.component';
export * from './attribute-list/attribute-list.component';
export * from './attribute';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    RadioButtonModule
  ],
  declarations: [
    AttributeComponent,
    AttributeListComponent
  ],
  exports: [
    AttributeComponent,
    AttributeListComponent
  ],
  entryComponents: [
    AttributeComponent,
    AttributeListComponent
  ]
})
export class AttributeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AttributeModule
    };
  }
}
