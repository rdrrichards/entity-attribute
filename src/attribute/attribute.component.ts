import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  template: `<form [formGroup]="attributeForm" class="ui-g" (ngSubmit)="onSubmit()" >
    <p-panel header="Attribute" class="ui-g-12">
      <div class="ui-g">
        <label for="attributeId" class="ui-g-12 ui-md-2">Attribute ID</label>
        <input pInputText id="attributeId" formControlName="attributeId" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="entityId" class="ui-g-12 ui-md-2">Entity ID</label>
        <input pInputText id="entityId" formControlName="entityId" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="entityType" class="ui-g-12 ui-md-2">Entity Type ID</label>
        <input pInputText id="entityType" formControlName="entityType" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="attributeType" class="ui-g-12 ui-md-2">Attribute Type</label>
        <input pInputText id="attributeType" formControlName="attributeType" class="ui-g-12 ui-md-5" readonly>
      </div>
      <div class="ui-g">
        <label for="attributeValue" class="ui-g-12 ui-md-2">Attribute Value</label>
        <input pInputText id="attributeValue" formControlName="attributeValue" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="attributeDataType" class="ui-g-12 ui-md-2">Attribute Data Type</label>
        <input pInputText id="attributeDataType" formControlName="attributeDataType" class="ui-g-12 ui-md-5">
      </div>
      <div class="ui-g">
        <label for="attributeDisplayFormat" class="ui-g-12 ui-md-2">Attribute Display Format</label>
        <input pInputText id="attributeDisplayFormat" formControlName="attributeDisplayFormat" class="ui-g-12 ui-md-5">
      </div>
      <button pButton type="submit" [disabled]="formHasErrors()" label="Save" icon="fa-floppy-o"></button>
    </p-panel>
  </form>`
})
export class AttributeComponent implements OnInit {
  @Input() attribute: Attribute = new Attribute();
  @Input() readOnly = false;
  attributeForm: FormGroup;

  constructor(private fb: FormBuilder) { this.buildForm(); }

  ngOnInit() {
    if (this.attribute) {
      this.buildForm();
    }
  }

  buildForm() {
    console.log(this.attribute);
    this.attributeForm = this.fb.group({
      attributeId: [this.attribute.attributeId || '00000000-0000-0000-0000-000000000000', [Validators.required]],
      entityId: [this.attribute.entityId || '00000000-0000-0000-0000-000000000000', [Validators.required]],
      entityType: [this.attribute.entityType.entityTypeName || '00000000-0000-0000-0000-000000000000', [Validators.required]],
      attributeType: [this.attribute.attributeType.attributeTypeName || '00000000-0000-0000-0000-000000000000', [Validators.required]],
      attributeValue: [this.attribute.attributeValue || '', [Validators.required]],
      attributeDataType: [this.attribute.attributeDataType || '', [Validators.required]],
      attributeDisplayFormat: [this.attribute.attributeDisplayFormat || '', [Validators.required]],
    });
  }
  formHasErrors() {
    return !this.attributeForm.valid;
  }
  onSubmit() {
  }
}
