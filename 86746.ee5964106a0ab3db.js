"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86746],{86746:n=>{n.exports='<div class="container">\n    <tui-block-status\n        class="card"\n        [card]="true"\n    >\n        <tui-avatar-stack tuiSlot="top">\n            <tui-avatar\n                *ngFor="let user of users"\n                size="l"\n                [src]="user | tuiInitials"\n                [style.background]="user | tuiAutoColor"\n            />\n        </tui-avatar-stack>\n\n        You can put other content instead of image using\n        <code>tui-block-content</code>\n        css class\n\n        <button\n            appearance="primary"\n            size="s"\n            tuiButton\n            [style.border-radius.rem]="100"\n        >\n            Got it\n        </button>\n    </tui-block-status>\n\n    <tui-block-status\n        [card]="true"\n        [class.card]="true"\n    >\n        <img\n            alt="Alex Inkin"\n            src="/assets/images/avatar.jpg"\n            tuiSlot="top"\n            class="avatar"\n        />\n\n        <h1>Alex Inkin</h1>\n    </tui-block-status>\n</div>\n'}}]);