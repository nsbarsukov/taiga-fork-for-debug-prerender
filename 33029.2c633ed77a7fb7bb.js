"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33029],{33029:e=>{e.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiFileComponent,\n    TuiFileRejectedPipe,\n    TuiFilesComponent,\n    TuiInputFilesComponent,\n    TuiInputFilesDirective,\n} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent7\",\n    imports: [\n        TuiInputFilesComponent,\n        TuiInputFilesDirective,\n        FormsModule,\n        TuiFilesComponent,\n        TuiFileComponent,\n        NgForOf,\n        TuiFileRejectedPipe,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected files: File[] = [];\n    protected rejected: File[] = [];\n\n    protected onRemove(remove: File): void {\n        this.files = this.files.filter(file => file !== remove);\n        this.rejected = this.rejected.filter(file => file !== remove);\n    }\n\n    protected onChange(files: File[]): void {\n        this.files = files.filter(file => !this.rejected.includes(file));\n    }\n\n    protected onReject(rejected: File[]): void {\n        this.rejected = rejected;\n    }\n}\n"}}]);