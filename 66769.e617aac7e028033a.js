"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[66769],{66769:e=>{e.exports='<label\n    *ngIf="!control.value"\n    tuiInputFiles\n>\n    <input\n        accept="image/*"\n        tuiInputFiles\n        [formControl]="control"\n    />\n</label>\n\n<tui-files class="tui-space_top-1">\n    <tui-file\n        *ngIf="control.value | tuiFileRejected: {accept: \'image/*\'} | async as file"\n        state="error"\n        [file]="file"\n        (remove)="removeFile()"\n    />\n\n    <tui-file\n        *ngIf="loadedFiles$ | async as file"\n        [file]="file"\n        (remove)="removeFile()"\n    />\n\n    <tui-file\n        *ngIf="failedFiles$ | async as file"\n        state="error"\n        [file]="file"\n        (remove)="removeFile()"\n    />\n\n    <tui-file\n        *ngIf="loadingFiles$ | async as file"\n        state="loading"\n        [file]="file"\n        (remove)="removeFile()"\n    />\n</tui-files>\n'}}]);