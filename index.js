"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const ngfuse_service_1 = require("./src/ngfuse.service");
const ngfuse_pipe_1 = require("./src/ngfuse.pipe");
let NgFuseModule = class NgFuseModule {
};
NgFuseModule = __decorate([
    core_1.NgModule({
        declarations: [
            ngfuse_pipe_1.NgFusePipe
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        exports: [
            ngfuse_pipe_1.NgFusePipe
        ],
        providers: [ngfuse_service_1.NgFuseService],
    })
], NgFuseModule);
exports.NgFuseModule = NgFuseModule;
var ngfuse_service_2 = require("./src/ngfuse.service");
exports.NgFuseService = ngfuse_service_2.NgFuseService;
var ngfuse_pipe_2 = require("./src/ngfuse.pipe");
exports.NgFusePipe = ngfuse_pipe_2.NgFusePipe;
