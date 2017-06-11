import { NgModule } from '@angular/core';

import { NgFuseOptions, NgFuseService } from './src/ngfuse.service';
import { NgFusePipe } from './src/ngfuse.pipe';

@NgModule({
    declarations: [],
    exports: [NgFuseModule],
    providers: [NgFuseService],
})
export class NgFuseModule { }
export { NgFuseOptions, NgFuseService } from './src/ngfuse.service';
export { NgFusePipe } from './src/ngfuse.pipe';