(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39853],{39853:n=>{n.exports='<tui-input-number\n    decimal="never"\n    class="index-controller"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n\n<div class="wrapper">\n    <tui-arc-chart\n        size="m"\n        class="tui-space_right-4"\n        [value]="value"\n        [(activeItemIndex)]="activeItemIndex"\n    >\n        Total value\n    </tui-arc-chart>\n    <tui-arc-chart\n        size="l"\n        class="tui-space_right-4"\n        [value]="value"\n        [(activeItemIndex)]="activeItemIndex"\n    >\n        Total value\n        <div>Label</div>\n    </tui-arc-chart>\n    <tui-arc-chart\n        size="xl"\n        class="tui-space_right-4"\n        [value]="value"\n        [(activeItemIndex)]="activeItemIndex"\n    >\n        <span>{{ 123456 | tuiAmount: \'RUB\' | async }}</span>\n        <div>Not bad!</div>\n    </tui-arc-chart>\n</div>\n'}}]);