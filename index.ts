import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgFuseOptions, NgFuseService } from './src/ngfuse.service';
import { NgFusePipe } from './src/ngfuse.pipe';

@NgModule({
	declarations: [
		NgFusePipe
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		NgFusePipe
	],
	providers: [NgFuseService],
})
export class NgFuseModule { }
export { NgFuseOptions, NgFuseService } from './src/ngfuse.service';
export { NgFusePipe } from './src/ngfuse.pipe';
