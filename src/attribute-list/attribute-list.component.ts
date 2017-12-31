import { Component, Input } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-attribute-list',
  template: `<p-dataTable [value]="attributes" class="ui-g-12">
    <p-column field="attributeId" header="Attribute Id" hidden="hidden"></p-column>
    <p-column field="attributeType.attributeTypeName" header="Attribute Type Name"></p-column>
    <p-column field="attributeValue" header="Attribute Value"></p-column>
    <p-column field="attributeDataType" header="Data Type"></p-column>
    <p-column field="attributeDisplayFormat" header="Display Format"></p-column>
    <p-column field="attributeType.attributeTypeDesc" header="Description"></p-column>
  </p-dataTable>`
})
export class AttributeListComponent {
  @Input() attributes: Attribute[] = [];

  constructor() { }
}
