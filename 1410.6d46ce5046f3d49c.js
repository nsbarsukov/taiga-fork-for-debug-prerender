"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1410],{1410:e=>{e.exports='<p>Change the viewport of this window to see changes in breakpoint</p>\n\n<table class="tui-space_top-4">\n    <thead>\n        <tr>\n            <th>CSS</th>\n            <th>Service</th>\n        </tr>\n    </thead>\n    <tbody>\n        <td>\n            <div class="mobile">Mobile</div>\n            <div class="desktop-small">Desktop small</div>\n            <div class="desktop-large">Desktop large</div>\n        </td>\n        <td *ngIf="breakpoint$ | async as breakpoint">\n            <div *ngIf="breakpoint === \'mobile\'">Mobile</div>\n            <div *ngIf="breakpoint === \'desktopSmall\'">Desktop small</div>\n            <div *ngIf="breakpoint === \'desktopLarge\'">Desktop large</div>\n        </td>\n    </tbody>\n</table>\n'}}]);