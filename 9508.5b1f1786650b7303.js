(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9508],{9508:n=>{n.exports='<div class="button-group">\n    <div class="beaver-wrapper">\n        <button\n            *ngIf="!isLeft"\n            type="button"\n            class="beaver"\n            [@tuiSlideInLeft]="getAnimation((speed | async) || 0)"\n            (click)="isLeft = !isLeft"\n        >\n            <span class="nose"></span>\n            <span class="teeth-left"></span>\n            <span class="teeth-right"></span>\n        </button>\n    </div>\n    <div class="beaver-wrapper">\n        <button\n            *ngIf="!isBottom"\n            type="button"\n            class="beaver"\n            [@tuiSlideInBottom]="getAnimation((speed | async) || 0)"\n            (click)="isBottom = !isBottom"\n        >\n            <span class="nose"></span>\n            <span class="teeth-left"></span>\n            <span class="teeth-right"></span>\n        </button>\n    </div>\n    <div class="beaver-wrapper">\n        <button\n            *ngIf="!isRight"\n            type="button"\n            class="beaver"\n            [@tuiSlideInRight]="getAnimation(speed.value)"\n            (click)="isRight = !isRight"\n        >\n            <span class="nose"></span>\n            <span class="teeth-left"></span>\n            <span class="teeth-right"></span>\n        </button>\n    </div>\n    <div class="beaver-wrapper">\n        <button\n            *ngIf="!isTop"\n            type="button"\n            class="beaver"\n            [@tuiSlideInTop]="getAnimation(speed.value)"\n            (click)="isTop = !isTop"\n        >\n            <span class="nose"></span>\n            <span class="teeth-left"></span>\n            <span class="teeth-right"></span>\n        </button>\n    </div>\n</div>\n\n<button\n    appearance="outline"\n    tuiButton\n    type="button"\n    class="button"\n    (click)="reset()"\n>\n    Reset\n</button>\n'}}]);