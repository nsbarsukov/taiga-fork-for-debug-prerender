(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25195],{25195:n=>{n.exports='<tui-tabs [(activeItemIndex)]="activeItemIndex">\n    <ng-container *ngFor="let step of steps; let last = last">\n        <button\n            tuiTab\n            class="step"\n            [disabled]="last"\n            (click)="onClick(step)"\n        >\n            {{ step }}\n        </button>\n        <tui-icon\n            *ngIf="!last"\n            icon="tuiIconChevronRight"\n            class="separator"\n        />\n    </ng-container>\n</tui-tabs>\n<tui-input-number\n    decimal="never"\n    class="tui-space_top-4"\n    [max]="2"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n'}}]);