"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87608],{87608:e=>{e.exports='<tui-tiles\n    class="tiles"\n    [(order)]="order"\n>\n    <tui-tile\n        *ngFor="let item of items; let index = index"\n        tuiTileHandle\n        class="tile"\n        [class.tile_tall]="item === \'John Cleese\'"\n        [style.order]="order.get(index)"\n    >\n        <div class="content">{{ item }}</div>\n    </tui-tile>\n</tui-tiles>\n'}}]);