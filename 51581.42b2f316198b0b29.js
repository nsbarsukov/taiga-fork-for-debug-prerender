"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51581],{51581:n=>{n.exports='<button\n    size="m"\n    tuiButton\n    type="button"\n    (click)="showTableBar()"\n>\n    Show TableBar\n</button>\n\n<ng-template\n    #tableBarTemplate\n    let-close\n>\n    <div class="content">\n        <button\n            size="m"\n            tuiButton\n            type="button"\n        >\n            Save\n        </button>\n        <button\n            appearance="flat"\n            size="m"\n            tuiButton\n            type="button"\n            class="tui-space_left-3"\n            (click)="close()"\n        >\n            Cancel\n        </button>\n        <button\n            appearance="whiteblock"\n            iconLeft="tuiIconTrashLarge"\n            size="m"\n            tuiButton\n            type="button"\n            class="delete-button"\n        >\n            Delete\n        </button>\n    </div>\n</ng-template>\n'}}]);