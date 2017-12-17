import { Component, Input } from '@angular/core';
import { Attribute } from '../attribute';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent {
  @Input() attributes: Attribute[] = [];

  constructor() { }
}
