"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39757],{39757:n=>{n.exports='<h3>TODO:</h3>\n<p>(click on item if it is finished)</p>\n\n<ul class="tui-list">\n    <li\n        *ngFor="let task of todoTasks"\n        class="tui-list__item"\n        (click)="task.completed = !task.completed"\n    >\n        {{ task.title }}\n        <tui-svg\n            *ngIf="task.completed"\n            src="tuiIconCheck"\n            [@tuiScaleIn]="getAnimation((speed | async) || 0)"\n        />\n    </li>\n</ul>\n'}}]);