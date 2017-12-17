# @qiqo/entity-attribute

This library is not on NPM at this time.

## Installation

To install this library, run:

```bash
$ npm install qiqo/entity-attribute --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AttributeModule } from 'qiqo/entity-attribute';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AttributeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  attribute: Attribute;
}
```

Once the library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<h1>
  {{title}}
</h1>
<app-attribute *ngIf="attribute" [attribute]="attribute"></app-attribute>
<app-attribute-list *ngIf="attributes" [attributes]="attributes"></app-attribute-list>
```

## License

MIT © [R Richards](mailto:rdrrichards@hotmail.com)
