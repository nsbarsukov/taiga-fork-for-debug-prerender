"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96381],{96381:n=>{n.exports='\x3c!-- Add id for accessibility purposes --\x3e\n<h2 [id]="context.id">{{ context.heading }}</h2>\n<section>\n    \x3c!-- TODO: Polymorpheus fix type --\x3e\n    <ng-container *polymorpheusOutlet="$any(context.content) as text; context: context">\n        {{ text }}\n    </ng-container>\n</section>\n<p class="buttons">\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-3"\n        (click)="onClick(true)"\n    >\n        {{ context.buttons[0] }}\n    </button>\n    <button\n        appearance="secondary"\n        tuiButton\n        type="button"\n        (click)="onClick(false)"\n    >\n        {{ context.buttons[1] }}\n    </button>\n</p>\n'}}]);