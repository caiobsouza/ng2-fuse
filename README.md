# Angular 2 Fuse (aka Ng2Fuse)
## Working in progress

## Installation
> npm install ng2-fuse

## Usage
 Import NgFuseMode
```
import { NgFuseModule } from 'ng2-fuse';
@NgModule({
  imports: [
    ...
    NgFuseModule,
    ...
  ],
  ...
})
```

Use NgFuse Pipe with *ngFor
```
<li *ngFor="let item of (collection | ngFuse:queryString:{keys: ['name', 'email']})"></li>
```

### Options
NgFuse uses fusejs defaults as base. For more details, see [Fuse.js Official Documentation](http://fusejs.io/)

```
defaults: NgFuseOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        minSearchStringLenght: 1
    }
```
