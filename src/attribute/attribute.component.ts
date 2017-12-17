import { Component, OnInit, Input } from '@angular/core';
import { Attribute } from '../attribute';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
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
