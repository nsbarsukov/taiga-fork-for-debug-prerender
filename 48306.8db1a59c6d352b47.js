"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48306],{48306:n=>{n.exports='<tui-axes\n    class="axes"\n    [horizontalLines]="2"\n    [verticalLines]="4"\n>\n    <tui-line-chart\n        [height]="200"\n        [tuiHintContent]="hint"\n        [value]="value"\n        [width]="400"\n        [x]="0"\n        [y]="0"\n    />\n</tui-axes>\n\n<tui-axes\n    class="axes tui-space_top-10"\n    [horizontalLines]="2"\n    [verticalLines]="4"\n>\n    <tui-line-chart\n        tuiHintAppearance="error"\n        [dots]="true"\n        [height]="200"\n        [tuiHintContent]="hintContent"\n        [value]="singleValue"\n        [width]="400"\n        [x]="0"\n        [y]="0"\n    />\n</tui-axes>\n\n<ng-template\n    #hintContent\n    let-index="index"\n    let-value\n>\n    <div>Vertical: {{ value[0] }}</div>\n    <div>Horizontal: {{ value[1] }}</div>\n    <div>index: {{ index }}</div>\n</ng-template>\n'}}]);