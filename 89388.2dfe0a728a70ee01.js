"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89388],{89388:n=>{n.exports='<p>1. Display only the first line, in a popup display remaining lines.</p>\n\n<div class="island">\n    <tui-line-clamp\n        [content]="userAdditionalInfo"\n        [linesLimit]="1"\n    />\n</div>\n\n<p>2. Do not use `tui-line-clamp`, use `text-overflow: ellipsis` instead.</p>\n\n<div class="island">\n    <p\n        class="email"\n        [tuiHint]="userAdditionalInfo"\n    >\n        {{ user.email }}\n    </p>\n</div>\n\n<ng-template #userAdditionalInfo>\n    <span>{{ user.email }}</span>\n\n    <p>User ID: {{ user.id }}</p>\n    <p>First Name: {{ user.firstName }}</p>\n    <p>Last Name: {{ user.lastName }}</p>\n</ng-template>\n'}}]);