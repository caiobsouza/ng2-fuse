import { Pipe, PipeTransform } from '@angular/core';
import { NgFuseOptions, NgFuseService } from './ngfuse.service'

@Pipe({ name: "ngFuse" })
export class NgFusePipe implements PipeTransform {

    constructor(private fuseService: NgFuseService) { }

    transform(collection: Array<Object>, searchString: string, options: NgFuseOptions = {}): any {
        return this.fuseService.search(collection, searchString, options);
    }
}