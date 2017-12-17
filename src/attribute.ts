export class Attribute {
  attributeId: string;
  entityId: string;
  entityType: EntityType = new EntityType();
  attributeType: AttributeType = new AttributeType();
  attributeValue: string;
  attributeDataType: string;
  attributeDisplayFormat: string;
}

export class AttributeType {
  attributeTypeId: string;
  attributeDataTypeKey: QIQOAttributeDataType;
  attributeDefaultFormat: string;
  attributeTypeCode: string;
  attributeTypeCategory: string;
  attributeTypeName: string;
  attributeTypeDesc: string;
}

export class EntityType {
  entityTypeId: string;
  entityTypeCode: string;
  entityTypeCategory: string;
  entityTypeName: string;
  entityTypeDesc: string;
}

export enum QIQOAttributeDataType {
  number = 1,
  string = 2,
  money = 3
}
